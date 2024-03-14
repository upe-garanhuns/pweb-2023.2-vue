<template>
    <form @submit.prevent="handleSubmit">
        <label for="email">Email:</label>
        <input name="email" type="email" required v-model="email">

        <label for="password">Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label for="role">Role:</label>
        <select name="role" id="" v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label for="skills">Skills:</label>
        <input name="skills" type="text" v-model="tempSkill" @keyup="addSkill">
        <div v-for="skill in skills" class="skill" @click="deleteSkill">
            {{ skill }}
        </div>

        <label for="data">Data:</label>
        <input name="data" type="date" v-model="data" @keyup="addSkill">
        <div v-for="skill in skills" class="skill" @click="deleteSkill">
            {{ skill }}
        </div>

        <div class="submit">
            <button>Create an account</button>
        </div>

        <div class="terms">
            <input name="conditions" type="checkbox" required v-model="conditions">
            <label for="conditions">Accept Terms and Conditions</label>
        </div>

        <!--<div>
            <input name="names" value="joão" type="checkbox" v-model="names">
            <label for="names">João</label>
        </div>
        <div>
            <input name="names" value="pedro" type="checkbox" v-model="names">
            <label for="names">Pedro</label>
        </div>
        <div>
            <input name="names" value="maria" type="checkbox" v-model="names">
            <label for="names">Maria</label>
        </div>-->
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>Terms and Conditions: {{ conditions }}</p>
    <p>Skills: {{ skills }}</p>
    <!--<p>Names: {{ names }}</p>-->

</template>

<script>
export default {
    data() {
        return {
            email: "", // se mudar aqui, muda lá em cima. Se o usuário mudar, muda aqui também. É mágica.
            password: "",
            role: "",
            conditions: false,
            tempSkill: "",
            skills: [],
            passwordError: "",
            data: ""
            //names: []
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === "," && this.tempSkill) {
                let copyTempSkill = this.tempSkill.substring(0, this.tempSkill.length - 1)
                if (!this.skills.includes(copyTempSkill)) {
                    this.skills.push(copyTempSkill)
                }
                this.tempSkill = ""
            }
        },
        deleteSkill(e) {
            this.skills = this.skills.filter(skill => skill !== e.target.innerText)
        },
        handleSubmit(e) {
            this.passwordError = this.password.length > 5 ? "" : "Senha tem que ter no mínimo 6 caracteres"

            if (!this.passwordError) {
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('role: ', this.role)
                console.log('skills: ', this.skills)
                console.log('terms accepted: ', this.condiitons)
            }
        }
    }


}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
    background-color: white;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}

.skill {
    display: inline-block;
    margin: 20px 10px 0;
    padding: 6px 12px;
    background-color: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

button {
    background-color: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}

.submit {
    text-align: center;
}

.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>