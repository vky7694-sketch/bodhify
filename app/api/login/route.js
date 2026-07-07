export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        {
          error: "Email and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    const backendUrl = process.env.BACKEND_URL;

    if (backendUrl) {
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        return Response.json(
          {
            error: responseData.error || "Login failed.",
          },
          {
            status: response.status,
          }
        );
      }

      return Response.json({ success: true, data: responseData });
    }

    // Fallback logic when BACKEND_URL is not configured.
    if (email === "test@example.com" && password === "password") {
      return Response.json({
        success: true,
        data: { email },
      });
    }

    return Response.json(
      {
        error: "Invalid email or password.",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    console.error("Login API Error:", error);

    return Response.json(
      {
        error: error?.message || "Unable to process login.",
      },
      {
        status: 500,
      }
    );
  }
}
