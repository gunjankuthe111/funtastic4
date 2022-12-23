const axios = require("axios");

export default function Home({user, error}) {
  console.log(user, error);
  return <div>hello Page</div>;
}

export async function getServerSideProps() {
  try {
    let user = await axios("http://localhost:3000/api/user/:id");
    return {
      props: {
        user: user.data,
      },
    };
  } catch (e) {
    return {
      props: {
        error: e.message,
      },
    };
  }
}
