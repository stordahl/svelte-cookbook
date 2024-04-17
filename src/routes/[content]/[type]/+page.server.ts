import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const type = params.type;
  const recipes = await getRecipes(type);
	
  return {
		title: type,
		recipes,
	};
};

async function getRecipes(type: string): Promise<SectionObj[]> {
  const allSectionIndexFiles = import.meta.glob('/src/content/**/*.md');
  const iterableSectionIndexFiles = Object.entries(allSectionIndexFiles);

  const sectionPromises: Promise<SectionObj>[] = iterableSectionIndexFiles.filter(([path]) => path.includes(type)).map(
    async ([path, resolver]): Promise<SectionObj> => { 
      const { metadata } = (await resolver()) as { metadata: SectionsMetaData } || {};
      return { metadata, path: path.replace("/src/content", "") };
    }
  ).filter((a) => !!a);

  return await Promise.all(sectionPromises);
}

export interface SectionObj {
  metadata: SectionsMetaData;
  path: string;
}

export interface SectionsMetaData {
  description: string;
  title: string;
  author: string;
  authorLink: string;
  url: string;
}
