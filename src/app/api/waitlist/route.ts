import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 },
      );
    }

    await resend.emails.send({
      from: "Bulldogging.Pro <support@bulldogging.pro>",
      to: email,
      subject: "You're on the Bulldogging.Pro waitlist! 🤠",
      html: `
        <div style="background-color:#0e1319;color:#eef2f7;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#d9a441;font-size:28px;margin:0;">BULLDOGGING.PRO</h1>
            <p style="color:#93a1b3;font-size:14px;margin-top:5px;">You cannot do this alone. So stop trying to.</p>
          </div>
          <h2 style="color:#d9a441;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#d3dbe6;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#d9a441;">Bulldogging.Pro</strong> — the complete platform for headers, heelers, producers, and coaches.
          </p>
          <p style="color:#d3dbe6;font-size:16px;line-height:1.6;">
            Steer wrestling is the only rodeo event where your run depends on
            another contestant who is not competing. Your hazer is a full partner
            in the outcome, you are probably on somebody else's horse, and both
            of them are owed money. Nobody has ever systematized any of it.
          </p>
          <h3 style="color:#d9a441;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#d3dbe6;font-size:15px;line-height:1.8;">
            <li>&#129309; Hazer board per rodeo — who is hazing, who still needs one</li>
            <li>&#128176; Hazer credit calculated on every run and named on the result</li>
            <li>&#128203; A shared settlement ledger both of you can see</li>
            <li>&#128052; Horse board and mount money, itemized per run</li>
            <li>&#128202; Horse workload across a weekend and across riders</li>
            <li>&#9201;&#65039; Run segments: catch, feet down, stop, throw, fall complete</li>
            <li>&#128002; Steer history — speed, straight rating, drop and fight flags</li>
            <li>&#127947;&#65039; Strength logs and injury records, private by default</li>
            <li>&#127942; Entries, draws, live results, averages, and payouts</li>
            <li>&#128101; The whole bulldogging community in one feed</li>
          </ul>
          <p style="color:#d3dbe6;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Keep swinging. 🤠
          </p>
          <p style="color:#93a1b3;font-size:14px;margin-top:30px;">
            — The Bulldogging.Pro Team<br/>
            <a href="https://bulldogging.pro" style="color:#d9a441;">bulldogging.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #33404f;margin:30px 0;" />
          <p style="color:#63707f;font-size:12px;text-align:center;">
            &copy; 2026 Apps 1, LLC. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify the team
    await resend.emails.send({
      from: "Bulldogging.Pro <support@bulldogging.pro>",
      to: "support@bulldogging.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
