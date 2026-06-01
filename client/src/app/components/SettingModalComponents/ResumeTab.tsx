const ResumeTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-semibold">Resume</h3>

        <p className="mt-1 text-zinc-600">Upload and manage resumes.</p>
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-700 p-7 text-center">
        <p className="text-zinc-600">Drag and drop your resume here</p>

        <button className="mt-5 rounded-lg bg-white px-5 py-2 text-black">
          Upload Resume
        </button>
      </div>
    </div>
  );
};

export default ResumeTab;
