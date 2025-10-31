import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // TODO: Implement your newsletter signup logic here
    // This could involve:
    // - Adding to your database
    // - Integrating with email services like Mailchimp, ConvertKit, etc.
    // - Sending a confirmation email

    console.log("Newsletter signup:", email);

    // For now, we'll just return a success response
    // Replace this with your actual implementation
    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
