import "../globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

const AuthRootLayout = ({ children }) => {
  return (
    <>
      <header id="auth-header">
        <p>Welcome back</p>
        <form action="">
          <button>Logout</button>
        </form>
      </header>
      {children}
    </>
  );
};

export default AuthRootLayout;
