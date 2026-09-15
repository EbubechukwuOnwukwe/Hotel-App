
const page = () => {
  return (
    <section>
        <h1>Register/Sign In</h1>
        <p>Sign in</p>
        <p>Register</p>

        <form action="" className="space-y-2">
            <input type="email" name="email" id="email" placeholder="Email" className="border rounded-md px-2 block"/>
            <input type="password" name="password" id="password" placeholder="Password" className="border rounded-md px-2 block"/>
            <a href="">Forgot Password?</a>
        </form>
    </section>
  )
}

export default page