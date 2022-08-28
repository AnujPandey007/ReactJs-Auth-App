import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function PrivateRoute() {
  const { currentUser } = useAuth()
 
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  // Here child is Dashboard and UpdateProfile
  return currentUser ? <Outlet/> : <Navigate to="/login" />
}