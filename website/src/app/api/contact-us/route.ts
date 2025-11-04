import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            from: 'hello@lattencreative.com',
            to: ['hello@lattencreative.com', 'jlatten@lattencreative.com', 'hello@jameslatten.com'],
            subject: `New Contact Form Submission - ${data.projectType}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Project Type:</strong> ${data.projectType}</p>
                <p><strong>Budget:</strong> ${data.budget}</p>
                <p><strong>Timeline:</strong> ${data.timeline}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}