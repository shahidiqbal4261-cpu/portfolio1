import Reveal from "../common/reveal/Reveal";

const notes = [
  {
    id: 1,
    topic: "Webhooks",
    title: "Keeping booking status in sync with supplier webhooks",
    summary:
      "How I map supplier callbacks into a single booking record so hotel, flight, and payment updates stay consistent in production.",
  },
  {
    id: 2,
    topic: "Data mapping",
    title: "Normalizing multi-supplier hotel JSON",
    summary:
      "A practical approach to unifying Hotelbeds, Travelpayouts, and RateHawk responses into one internal search model.",
  },
  {
    id: 3,
    topic: "Payments",
    title: "Confirming Xmoney charges before issuing vouchers",
    summary:
      "Auth, signature checks, and status confirmation so a booking is finalized only after a verified payment callback.",
  },
];

const Notes = () => {
  return (
    <div className="content px-4 md:px-8">
      <Reveal className="text-center mb-10 max-w-2xl mx-auto">
        <p className="section-eyebrow">Notes</p>
        <h2 className="section-title text-slate-900">
          Integration <span className="text-gradient">Write-ups</span>
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base">
          Short topics from production travel API work — ask for a deeper walkthrough anytime.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {notes.map((note, index) => (
          <Reveal key={note.id} delay={index * 80}>
            <article className="h-full p-6 rounded-2xl bg-white border border-slate-100 hover:border-sky-300 transition-colors duration-200 flex flex-col">
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-600 mb-2">
                {note.topic}
              </p>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                {note.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1">
                {note.summary}
              </p>
              <a
                href={`mailto:shahidiqbal4261@gmail.com?subject=${encodeURIComponent(
                  `Walkthrough: ${note.title}`
                )}&body=${encodeURIComponent(
                  `Hi Shahid,\n\nI'd like a deeper walkthrough on: ${note.title}\n`
                )}`}
                className="mt-5 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Request walkthrough →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Notes;
