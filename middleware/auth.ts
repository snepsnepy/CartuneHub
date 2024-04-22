export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  console.log("User: ", user.value);

  if (!user.value && to.path === "/notes") {
    return navigateTo("/");
  } else if (user.value && to.path === "/") {
    return navigateTo("/notes");
  }
});
