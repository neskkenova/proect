<template>
    <div>
        <h2>User List</h2>
        <ul v-if="!loading">
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
        <p v-if="loading">Loading...</p>
        <p v-if="error">Error: {{ error.message }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
            loading: true,
            error: null,
        };
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.users = response.data;
                this.loading = false;
            })
            .catch((error) => {
                this.error = error;
                this.loading = false;
            });
    },
};
</script>
