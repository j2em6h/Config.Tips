import { z, defineCollection, reference } from "astro:content";

const seoDescription = z.string().min(100).max(160)

// A Zod representation of some of the languages supported by Shiki for syntax hilighting
export const Lang = z.union([
  z.literal("apache"),
  z.literal("ara"),
  z.literal("beancount"),
  z.literal("bibtex"),
  z.literal("blade"),
  z.literal("cdc"),
  z.literal("cmake"),
  z.literal("codeql"),
  z.literal("ql"),
  z.literal("cue"),
  z.literal("cypher"),
  z.literal("cql"),
  z.literal("dax"),
  z.literal("diff"),
  z.literal("docker"),
  z.literal("dockerfile"),
  z.literal("git-commit"),
  z.literal("git-rebase"),
  z.literal("glimmer-js"),
  z.literal("glimmer-ts"),
  z.literal("gts"),
  z.literal("hcl"),
  z.literal("hjson"),
  z.literal("http"),
  z.literal("imba"),
  z.literal("ini"),
  z.literal("properties"),
  z.literal("jinja-html"),
  z.literal("json"),
  z.literal("json5"),
  z.literal("jsonc"),
  z.literal("jsonl"),
  z.literal("jsonnet"),
  z.literal("jssm"),
  z.literal("fsl"),
  z.literal("latex"),
  z.literal("less"),
  z.literal("liquid"),
  z.literal("make"),
  z.literal("makefile"),
  z.literal("markdown"),
  z.literal("md"),
  z.literal("mermaid"),
  z.literal("narrat"),
  z.literal("nar"),
  z.literal("nginx"),
  z.literal("postcss"),
  z.literal("powerquery"),
  z.literal("prisma"),
  z.literal("proto"),
  z.literal("pug"),
  z.literal("jade"),
  z.literal("puppet"),
  z.literal("reg"),
  z.literal("rel"),
  z.literal("rst"),
  z.literal("sass"),
  z.literal("scss"),
  z.literal("shaderlab"),
  z.literal("shader"),
  z.literal("shellscript"),
  z.literal("bash"),
  z.literal("console"),
  z.literal("sh"),
  z.literal("shell"),
  z.literal("zsh"),
  z.literal("ssh-config"),
  z.literal("stylus"),
  z.literal("styl"),
  z.literal("system-verilog"),
  z.literal("tex"),
  z.literal("toml"),
  z.literal("tsx"),
  z.literal("turtle"),
  z.literal("twig"),
  z.literal("v"),
  z.literal("cmd"),
  z.literal("viml"),
  z.literal("vim"),
  z.literal("vimscript"),
  z.literal("vue-html"),
  z.literal("wgsl"),
  z.literal("xml"),
  z.literal("xsl"),
  z.literal("yaml"),
  z.literal("yml"),
  z.literal("zenscript"),
]);

const configKindCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: seoDescription,
    body: z.string(),
    snippet: z.object({
      code: z.string(),
      lang: Lang,
      filePath: z.string(),
    }),
    website: z.string().url(),
    logo: z.string(),
  }),
});

const tipCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: seoDescription,
    snippet: z.string(),
    publishDate: z.string().transform((str) => new Date(str)).default(() => new Date().toDateString()),
    kind: reference("configKinds"),
  }),
});

export const collections = {
  configKinds: configKindCollection,
  tips: tipCollection,
}