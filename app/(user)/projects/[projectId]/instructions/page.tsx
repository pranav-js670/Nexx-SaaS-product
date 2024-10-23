import CopyBtn from "@/components/copy-btn";

const page = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) {
    return <div className="ml-8">Project not found!</div>;
  }
  if (!process.env.WIDGET_URL) {
    return <div className="ml-8">Widget URL not set!</div>;
  }
  return (
    <div className="ml-8">
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback!</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your application!
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative mr-10">
        <code className="text-white">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  );
};

export default page;
