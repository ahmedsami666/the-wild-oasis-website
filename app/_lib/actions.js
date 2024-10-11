'use server'

import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"

export async function signInAction() {
    await signIn('google', 
        {
            redirectTo: '/account'
        }
    )
}

export async function signOutAction() {
    await signOut({
        redirectTo: '/'
    })
}

export async function updateGuest(formData){
    const session = await auth()
    if (!session) throw new Error('you must be logged in')
    const nationalID = formData.get('nationalID')
    const [nationality, countryFlag] = formData.get('nationality').split('%')
    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) throw new Error('provide valid nationalID')
    const updateData = {nationality, countryFlag, nationalID}
    const { data, error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.user.guestId)
        .select()
        .single();

    if (error) {
        console.error(error);
        throw new Error('Guest could not be updated');
    }
    return data;
}