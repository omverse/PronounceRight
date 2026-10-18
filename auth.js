import { supabase } from "./supabase.js"

export async function signUp(email, password, username) {
  const cleanUsername = username?.trim();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: cleanUsername || undefined
      }
    }
  })

  if (error) {
    alert(error.message)
    return
  }

  alert("Signup successful! Please check your email.")
}

export async function login(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    alert(error.message)
  }
}

export async function logout() {
  await supabase.auth.signOut()
}
