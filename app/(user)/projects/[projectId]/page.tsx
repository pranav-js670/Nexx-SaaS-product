import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import Table from "@/components/table";
import { Globe, ChevronLeft, Code } from "lucide-react";

const page = async ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {

  if (!params.projectId) {
    return <div>Invalid Project ID</div>;
  }

  const projectId = parseInt(params.projectId);

  const project = await db.query.projects.findMany({
    where: eq(dbProjects.id, projectId), 
    with: {
      feedbacks: true, 
    },
  });

  if (!project.length) {
    return <div>Project not found</div>;
  }

  const projectName = project[0].name;
  const projectDescription = project[0].description;
  const projectUrl = project[0].url;
  const projectFeedbacks = project[0].feedbacks;

  return (
    <div>
      <div>
        <Link
          href="/dashboard"
          className="flex items-center text-indigo-700 mb-5 w-fit"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-lg">Back to projects</span>
        </Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{projectName}</h1>
          <h2 className="text-primary-background text-xl mb-2">
            {projectDescription}
          </h2>
        </div>
        <div className="flex flex-col">
          {projectUrl ? (
            <Link
              href={projectUrl}
              className="underline text-indigo-700 flex items-center"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-lg">Visit site</span>
            </Link>
          ) : null}
          <Link
            href={`/projects/${params.projectId}/instructions`}
            className="underline text-indigo-700 flex items-center mt-2"
          >
            <Code className="h-5 w-5 mr-1" />
            <span className="text-lg">Embed Code</span>
          </Link>
        </div>
      </div>
      <div>
        <Table data={projectFeedbacks} />
      </div>
    </div>
  );
};

export default page;
