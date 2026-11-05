import { ref } from 'vue'
import { users } from '../data/Users.js'

const isLoggedIn = ref(
    localStorage.getItem('isLoggedIn') === 'true'
)

const user = ref(
    JSON.parse(localStorage.getItem('user') || 'null')
)

export function useAuth() {

    function login(email, password) {
        const foundUser = users.find(
            u => u.email === email && u.password === password
        )

        if (!foundUser) {
            return false
        }

        isLoggedIn.value = true
        user.value = { email: foundUser.email }

        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('user', JSON.stringify(user.value))

        return true
    }

    function logout() {
        isLoggedIn.value = false
        user.value = null

        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
    }

    return {
        isLoggedIn,
        user,
        login,
        logout
    }
}