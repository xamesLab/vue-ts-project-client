import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        users: [
            {
                id: 1,
                email: 'testAdmin@test.tr',
                name: 'testAdmin',
                isActive: true,
            },
            {
                id: 2,
                email: 'test@test.tr',
                name: 'testUser',
                isActive: true,
            },
            {
                id: 3,
                email: 'test2@test.tr',
                name: 'testUserDis',
                isActive: false,
            },
        ],
        theme: {
            type: 'light'
        }
    }),
    getters: {
        activeUsers() {
            return this.users.filter(({isActive}) => isActive)
        },
    },
    actions: {
        setTheme(theme) {
            this.theme.type = theme
        }
    }
})