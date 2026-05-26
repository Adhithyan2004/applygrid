const ResumeTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold text-white">Resume</h3>

        <p className="mt-1 text-zinc-400">Upload and manage resumes.</p>
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-700 p-10 text-center">
        <p className="text-zinc-300">Drag and drop your resume here</p>

        <button className="mt-5 rounded-xl bg-white px-5 py-3 text-black">
          Upload Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeTab;
