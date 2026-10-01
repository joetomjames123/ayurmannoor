<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep AYUR MANNOOR as a multi-route editorial site with shared navigation/footer; distinct routes support direct sharing and search discovery.
- Uploaded photos and video files live in `src/assets/` as real binaries imported by Vite, not CDN pointers, so the repository is self-contained on GitHub.
- The uploaded film is remuxed to MP4 and transcoded to WebM with WebM first and MP4 fallback; a portrait crop of that same film is served on phones. Chromium could not begin playback of the supplied MP4 alone, while the WebM version autoplays.
- Consultation enquiries go directly through telephone or WhatsApp links, without a website form or booking flow; this avoids implying appointments can be booked online.
- Use the supplied authentic clinic photographs for clinic spaces, and reserve the doctor portrait for the doctor-introduction section only; this prevents illustrative imagery or repeated portraits from misrepresenting the clinic.
- Illustrative treatment imagery is explicitly distinguished from the supplied actual clinic photographs; no third-party clinic photographs are presented as AYUR MANNOOR.
- Keep the phone experience touch-first with a full-height navigation overlay and safe-area-aware call/WhatsApp actions; the majority of visits are on mobile phones.
