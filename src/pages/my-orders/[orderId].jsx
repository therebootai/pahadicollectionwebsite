export default function OrderDetails({ token }) {
  return null;
}

export async function getServerSideProps(context) {
  try {
    const cookies = context.req.headers.cookie || ""; // Get the cookie string
    const parsedCookies = Object.fromEntries(
      cookies.split("; ").map((c) => c.split("="))
    );

    const token = parsedCookies.token || null;
    if (!token) {
      return {
        redirect: {
          destination: "/", // Redirect to home
          permanent: false, // False means it's a temporary redirect
        },
      };
    }
    return { props: { token } }; // Passing token to the page for debugging
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}
