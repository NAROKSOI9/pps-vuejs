<template>
  <div>
        <RouterLink to ="/">One</RouterLink>
        {{' | '}}
        <RouterLink to ="/about">Two</RouterLink>
        {{' | '}}
        <RouterLink to ="/user">User</RouterLink>
        {{' | '}}
        <RouterLink to ="/form">Form</RouterLink>
  </div>
</template>

<script>
export default{

}
</script>