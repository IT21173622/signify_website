'use client';

export default function Publication() {
  return (
    <section
      id="publicationdetails"
      className="relative w-full py-20 px-6 bg-[#1f104a] text-white scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Publication Status
        </h2>

        <p className="text-xl sm:text-2xl font-medium mb-10">
          Our research paper titled<br /> <strong>"Signify: AI-Enhanced E-Learning for Hearing-Impaired Children"</strong> <br />has been submitted to the
          <br />
          <a
            href="https://icac.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#536dfe]"
          >
            7th International Conference on Advancements in Computing (ICAC 2025)
          </a>.
        </p>

        <p className="text-lg sm:text-xl text-[#bdbdbd]">
          We are currently awaiting review and response from the conference committee. We will update this section as soon as we receive any updates regarding the acceptance and presentation details.
        </p>
      </div>
    </section>
  );
}
