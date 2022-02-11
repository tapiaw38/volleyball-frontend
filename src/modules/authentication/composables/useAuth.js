import { useStore } from "vuex";
import { computed } from "vue";

const useAuth = () => {

    const store = useStore();

    const handleLogin = (userForm) => {
        store.dispatch("auth/login", userForm);
    };

    const handleLogout = () => {
        store.dispatch("auth/logout");
    };

    return {
        handleLogin,
        handleLogout,
        authStatus: computed( ()=> store.getters["auth/currentState"] ),
        user: computed( ()=> store.getters["auth/userSession"] )
    };

}

export default useAuth;