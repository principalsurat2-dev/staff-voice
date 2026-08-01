# Staff Voice

**Anonymous staff feedback system for schools, built to protect honesty and surface real signal for school leadership.**

Live demo: https://podarstaffvoice.netlify.app

## Why This Exists

Most staff feedback in schools is either informal (hallway comments that don't reach leadership) or performative (surveys staff fear will be traced back to them). Staff Voice is a lightweight, anonymous feedback pipeline that any school can deploy in a few minutes — no backend server to maintain, no per-response cost, no vendor lock-in.

Built and used in production at Podar International School, Jahangirabad, Surat, and released here so other CBSE and K-12 schools can adopt, adapt, or extend it.

## How It Works

- **Frontend:** A simple, mobile-friendly form (deployed on Netlify) where staff submit feedback with no login or identifying fields.
- **Backend:** A Google Apps Script endpoint receives submissions and writes them directly to a Google Sheet — no database to provision, no server to patch.
- **Analysis:** A companion offline dashboard reads the exported sheet data and produces theme/sentiment breakdowns for school leadership, without ever exposing raw submissions in a way that could re-identify a respondent.

## Getting Started (For Other Schools)

1. **Fork this repository.**
2. **Set up the Google Apps Script backend:**
   - Create a new Google Sheet to store responses.
   - Open Extensions → Apps Script, paste in `backend/script.gs`, and deploy it as a Web App (execute as "Me", accessible to "Anyone").
   - Copy the deployment URL.
3. **Configure the frontend:**
   - Update the form's submission endpoint in `index.html` (or `config.js`) with your Apps Script deployment URL.
4. **Deploy to Netlify:**
   - Connect your fork to Netlify, or drag-and-drop the `frontend/` folder into Netlify's deploy UI.
5. **(Optional) Set up the analysis dashboard** using the exported Sheet data — instructions in `analysis/README.md`.

## Anonymity & Data Handling Notes

- No authentication or identifying metadata (IP, device fingerprint, timestamp-to-user mapping) is collected by design.
- Schools deploying this tool are responsible for their own data governance and compliance with local student/staff data protection requirements.
- This project provides the mechanism for anonymous collection; it does not provide legal guarantees of anonymity against determined re-identification (e.g., very small staff pools, distinctive phrasing).

## Contributing

Issues and pull requests are welcome — especially from other schools adapting this for their own context (multi-language forms, different rubric categories, alternate backend choices). Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.

## License

Released under the [MIT License](./LICENSE) — free to use, fork, and adapt for your own institution.

## Maintainer

Manish Purani — Principal, Podar International School, Jahangirabad, Surat. CBSE Resource Person & Master Trainer.

---

*This site is powered by [Netlify](https://www.netlify.com).*
