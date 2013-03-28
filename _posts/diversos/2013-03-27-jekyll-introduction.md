---
layout: page
category : Tutoriais
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---

Esta introdução no Jekyll irá falar especificamente o que o Jehyl é e porque você irá
querer usa-lo.
Logo após a introdução nos iremos aprender exatamente como Jekyll faz o que faz.

## Visão geral 

### O que é Jekyll?

Jekyll é um mecanismo de analise construido como um "gem" da linguagem ruby usado para 
construir websites estáticos de componentes dinamicos como templates, arquivos parciais
liquid code, markdown, etc. Jekyll é conhecido como "um simples, blog aware, gerador de
 site estático".

### Exemplos

Este website foi criado com Jekyll. [Outros Jekyll websites](https://github.com/mojombo/jekyll/wiki/Sites). 


### O que Jekyll faz?

Jekyll é uma ruby gem (joia do ruby) que você instala em seu sistema local.
Onde você poderá chamar com o comando `jekyll --server`em um diretorio e este diretório
está no formato que jekyll espera, ele irá fazer a magica de analisar os arquivos makdown/textile,
identificar as categorias, tagas, permalinks, e construir suas páginas com base no padrões de layout 
e parciais disponivies.

Uma vez analisado, Jekyll gravará o resultado em um diretorio contido em sua pasta de projeto no formato estático.
A intenção aqui é que você possa servir todo o conteudo em seu folder de forma estática de um servidor web
estático comum.

Você pode pensar no Jekyll como um blog padrão mas ao invez dele analisar o conteúdo, templates, e tags
a cada requisição, Jekyll faz isto uma única vez _manualmente_ e armazena em um cache _todo o site_ em um folder para atender as requisições estáticamente.

### Jekyll não é um Software para Blog

**Jekyll é um mecanismo de analise.**

Jekyll não vem com algum conteudo nem tem algum template ou elemento de design.
Esta é uma comum fonte de confusão quando se está iniciando.
Jekyll não vem com nada que você pode usar ou ver em seu website - você terá que fazer-lo.

### O que é importante?

Jekyll é bem minimalista e bastante eficiente.
A coisa mais importante entender sobre Jekyll é que ele cria uma representação estática do seu 
website requerendo somente um servidor web estático.
Blogs dinamicos tradicionais como Wordpress e Joomla, requerem uma base de dados e um código server-site. 
Blogs dinamicos com alto trafego deve empregar uma camada de cache que finalmente realiza o mesmo trabalho 
que o Jekyll propõe, servindo o conteúdo de forma estático.

Portanto, se você gosta de manter as coisas simples e você prefere a linha de comando sobre
paines de administração gráficos então tente usar o Jekyll.

**Desenvolvedores gostam do Jekyll porque ele pode escrever contéudos como nos escrevemos código:**

- Abilidade para escrever contéudo  em makrdown ou textile em seu editor de texto preferido.
- Abilidade para escrever e previsualizar o conteudo via localhost.
- Não é requirido conexão com internet fixa. 
- Abilidade para publicar via git.
- Abilidade para hospedar seu blog em um servidor web estático.
- Abilidade de hospedar livremente no GitHub Pages.
- Não é preciso base de dados.

# Como Jekyll Funciona

A seguir é uma completo mas consiso resumo do como o Jekyll funciona.

Esteja ciente que os conceitos fundamentais são uma introdução em uma rápia sucessão sem 
exemplos de códigos. Testa informação não tem a intenção especifica de ensinar você 
como fazer algo, mas sim destina dar a você uma _visão geral_ relativa ao que está sendo
feito no mundo do Jekyll.

Aprendendo este conceitos fundamentais deve ajudar você a evitar frustrações comuns e 
ultimamente ajudar a entender os exemplos de código contidos em todo Jekyll-Bootstrap.

Ainda não estamos usando o Kehyll-Boostrap em nosso site do Arduino Minas, mas estamos 
trabalhando nisto.

## Setup Inicial

Após [instalar o Jekyll](/index.html#start-now) você precisara formatar seu diretorio do website
em formato que o Jekyll espera.
Jekyll-bootstrap convenientemente prover um formato base.

### O formato base do Jekyll

Jekyll espera que seu diretorio do website seja organizado como segue:

    .
    |-- _config.yml
    |-- _includes
    |-- _layouts
    |   |-- default.html
    |   |-- post.html
    |-- _posts
    |   |-- 2011-10-25-open-source-is-good.markdown
    |   |-- 2011-04-26-hello-world.markdown
    |-- _site
    |-- index.html
    |-- assets
        |-- css
            |-- style.css
        |-- javascripts


- **\_config.yml**  
	Armazena dados de configurações.

- **\_includes**  
	Este pasta contem visões parciais do site.

- **\_layouts**
	Esta pasta é para os templates principal, seu conteudo será inserido nela.
	Você pode ter layouts diferentes para páginas diferentes ou seções de páginas.

- **\_posts**
	Esta pasta contem seu conteúdo/posts dinamico, o formato dos nomes de cada arquivo
	precisa seguir o padrão `@YEAR-MONTH-DATE-title.MARKUP@`.

- **\_site**  
    Esta pasta é onde será gerado seu site será guardado quando Jekyll terminar de transforma-lo.

- **assets**  
	Esta pasta não é parte padrão da estrutura do jekyll.
	A pasta assets representa _algo generico_ que você possa criar em seu diretorio root.
	Diretorios e arquivos não formatados adequadamente serão mantidos intocaveis para seu
	 servidor normalmente.
	

(leia mais em: <https://github.com/mojombo/jekyll/wiki/Usage>)


### Cofiguraçòes do Jekyll

Jekyll suporta varias opções de configuração que são totalmente citadas aqui:
<https://github.com/mojombo/jekyll/wiki/Configuration>

## Conteúdo em Jekyll

Conteúdo em Jekyll é um post ou uma página.
Este objeto conteúdo é inserido em um ou mais templates para construir a saída final para sua
respectiva página estática.

### Posts e Pages

Ambos posts e pages devem ser escritos em markdown, tetile, ou HTML e pode ser também conter 
código de template Liquid.
Ambos posts e pages podem ter meta-data destinado em cada page tais como título, caminho da URL,
como também meta-data personalizado.

### Trabalhando com Posts

**Criando um Post**   
Posts são criados pela formatação adequada de um arquivo armazenado na pasta `_posts`.

**Formatação** 
Um post deve ter um nome de arquivo valido, em um formato `YEAR-MONTH-DATE-title.MARKUP` e 
será colocado no diretorio `_posts`.

Se o formato da data é invalido Jekyll não irá reconhecer o arquivo como um post. A data e o título são automáticamente analisado do nome do arquivo do post.
Em mais, cada arquivo deve ser [YAML Front-Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) preparado em seu conteúdo.
YAML Front-Matter é uma sintaxe YAML válida especificando meta-dados para o arquivo em questão.

**Ordem**  
Ordenação é uma parte inportante do Jekyll, mas ele é complexo especificar uma estratégia de ordenação personalizada.
Somente ordenação cronológica e reversa é suportado no Jekyll.

Desde que a data é hard-coded no formato do nome do arquivo, para alterar a ordem, você deve alterar a data do nome do arquivo.

**Tags**   
Postagens podem ter tags associadas como parte do seu meta-dado.
Tags podem ser colocadas no post provendo então em um formato YAML.
Você tem acesso as tags especificas nos templates. Estas tags também são adicionados a 
coleção do site.

**Categorias**
Postes podem ser categorizada fornecendo uma ou mais categorias no formato YAML.
Categorias oferecem mais significancia do que tags em que ele pode refletir no caminho da URL que é relativa ao post.
Observe, categorias no Jekyll funcionam em uma forma especial.
Se você definir mais que uma categoria você estará definindo um "set" de hierarquia de categoria.

Exemplo:

    ---
    title :  Hello World
    categories : [lessons, beginner]
    ---

Isto define uma hierarquia de categoria do tipo "lessons/beginner". Observe que é _um nó de categoria_ no Jekyll.
Você não encontrará "lessons" e "beginner" como duas categorias separadas a menos qe você defina então em outro 
lugar como categorias singulares.

### Trabalhando com Pages

**Creating a Page**  
Pages are created by properly formatting a file and placing it anywhere in the root directory or subdirectories that do _not_ start with an underscore.

**Formatting**  
In order to register as a Jekyll page the file must contain [YAML Front-Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter).
Registering a page means 1) that Jekyll will process the page and 2) that the page object will be available in the `site.pages` array for inclusion into your templates.

**Categories and Tags**  
Pages do not compute categories nor tags so defining them will have no effect.

**Sub-Directories**  
If pages are defined in sub-directories, the path to the page will be reflected in the url.
Example:

    .
    |-- people
        |-- bob
            |-- essay.html

This page will be available at `http://yourdomain.com/people/bob/essay.html`


**Recommended Pages**  

- **index.html**  
  You will always want to define the root index.html page as this will display on your root URL.
- **404.html**  
  Create a root 404.html page and GitHub Pages will serve it as your 404 response.
- **sitemap.html**  
  Generating a sitemap is good practice for SEO.
- **about.html**  
  A nice about page is easy to do and gives the human perspective to your website.


## Templates in Jekyll

Templates are used to contain a page's or post's content.
All templates have access to a global site object variable: `site` as well as a page object variable: `page`.
The site variable holds all accessible content and metadata relative to the site.
The page variable holds accessible data for the given page or post being rendered at that point.

**Create a Template**  
Templates are created by properly formatting a file and placing it in the `_layouts` directory.

**Formatting**  
Templates should be coded in HTML and contain YAML Front Matter. 
All templates can contain Liquid code to work with your site's data.

**Rending Page/Post Content in a Template**  
There is a special variable in all templates named : `content`.
The `content` variable holds the page/post content including any sub-template content previously defined.
Render the content variable wherever you want your main content to be injected into your template:

{% capture text %}...
<body>
  <div id="sidebar"> ... </div>
  <div id="main">
    |.{content}.|
  </div>
</body>
...{% endcapture %}
{% include JB/liquid_raw %}

### Sub-Templates

Sub-templates are exactly templates with the only difference being they 
define another "root" layout/template within their YAML Front Matter.
This essentially means a template will render inside of another template.

### Includes
In Jekyll you can define include files by placing them in the `_includes` folder.
Includes are NOT templates, rather they are just code snippets that get included into templates.
In this way, you can treat the code inside includes as if it was native to the parent template.

Any valid template code may be used in includes.


## Using Liquid for Templating

Templating is perhaps the most confusing and frustrating part of Jekyll.
This is mainly due to the fact that Jekyll templates must use the Liquid Templating Language.

### What is Liquid?

[Liquid](https://github.com/Shopify/liquid) is a secure templating language developed by [Shopify](http://shopify.com).
Liquid is designed for end-users to be able to execute logic within template files 
without imposing any security risk on the hosting server.

Jekyll uses Liquid to generate the post content within the final page layout structure and as the primary interface for working with
your site and post/page data. 

### Why Do We Have to Use Liquid?

GitHub uses Jekyll to power [GitHub Pages](http://pages.github.com/). 
GitHub cannot afford to run arbitrary code on their servers so they lock developers down via Liquid.

### Liquid is Not Programmer-Friendly.

The short story is liquid is not real code and its not intended to execute real code.
The point being you can't do jackshit in liquid that hasn't been allowed explicitly by the implementation.
What's more you can only access data-structures that have been explicitly passed to the template. 

In Jekyll's case it is not possible to alter what is passed to Liquid without hacking the gem or running custom plugins. 
Both of which cannot be supported by GitHub Pages.

As a programmer - this is very frustrating.

But rather than look a gift horse in the mouth we are going to 
suck it up and view it as an opportunity to work around limitations and adopt client-side solutions when possible.

**Aside**   
My personal stance is to not invest time trying to hack liquid. It's really unnecessary
_from a programmer's_ perspective. That is to say if you have the ability to run custom plugins (i.e. run arbitrary ruby code)
you are better off sticking with ruby. Toward that end I've built [Mustache-with-Jekyll](http://github.com/plusjade/mustache-with-jekyll)


## Static Assets

Static assets are any file in the root or non-underscored subfolders that are not pages.
That is they have no valid YAML Front Matter and are thus not treated as Jekyll Pages.

Static assets should be used for images, css, and javascript files. 




## How Jekyll Parses Files

Remember Jekyll is a processing engine. There are two main types of parsing in Jekyll.

- **Content parsing.**   
	This is done with textile or markdown.
- **Template parsing.**   
  This is done with the liquid templating language.

And thus there are two main types of file formats needed for this parsing.

- **Post and Page files.**  
  All content in Jekyll is either a post or a page so valid posts and pages are parsed with markdown or textile.
- **Template files.**    
	These files go in `_layouts` folder and contain your blogs **templates**. They should be made in HTML with the help of Liquid syntax.
	Since include files are simply injected into templates they are essentially parsed as if they were native to the template.

**Arbitrary files and folders.**   
Files that _are not_ valid pages are treated as static content and pass through 
Jekyll untouched and reside on your blog in the exact structure and format they originally existed in.

### Formatting Files for Parsing.

We've outlined the need for valid formatting using **YAML Front Matter**.
Templates, posts, and pages all need to provide valid YAML Front Matter even if the Matter is empty.
This is the only way Jekyll knows you want the file processed.

YAML Front Matter must be prepended to the top of template/post/page files:

    ---
    layout: post
    category : pages
    tags : [how-to, jekyll]
    ---

    ... contents ...

Three hyphens on a new line start the Front-Matter block and three hyphens on a new line end the block.
The data inside the block must be valid YAML.

Configuration parameters for YAML Front-Matter is outlined here:
[A comprehensive explanation of YAML Front Matter](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter)

#### Defining Layouts for Posts and Templates Parsing.

The `layout` parameter in the YAML Front Matter defines the template file for which the given post or template should be injected into.
If a template file specifies its own layout, it is effectively being used as a `sub-template.`
That is to say loading a post file into a template file that refers to another template file with work in the way you'd expect; as a nested sub-template.





## How Jekyll Generates the Final Static Files.

Ultimately, Jekyll's job is to generate a static representation of your website. 
The following is an outline of how that's done:

1. **Jekyll collects data.**   
  Jekyll scans the posts directory and collects all posts files as post objects. It then scans the layout assets and collects those and finally scans other directories in search of pages.

2. **Jekyll computes data.**   
  Jekyll takes these objects, computes metadata (permalinks, tags, categories, titles, dates) from them and constructs one 
  big `site` object that holds all the posts, pages, layouts, and respective metadata.
  At this stage your site is one big computed ruby object.

3. **Jekyll liquifies posts and templates.**  
  Next jekyll loops through each post file and converts (through markdown or textile) and **liquifies** the post inside of its respective layout(s).
  Once the post is parsed and liquified inside the the proper layout structure, the layout itself is "liquified".   
	**Liquification** is defined as follows: Jekyll initiates a Liquid template, and passes a simpler hash representation of the ruby site object as well as a simpler
  hash representation of the ruby post object. These simplified data structures are what you have access to in the templates.
	
3. **Jekyll generates output.**   
	Finally the liquid templates are "rendered", thereby processing any liquid syntax provided in the templates
	and saving the final, static representation of the file.
 
**Notes.**  
Because Jekyll computes the entire site in one fell swoop, each template is given access to 
a global `site` hash that contains useful data. It is this data that you'll iterate through and format 
using the Liquid tags and filters in order to render it onto a given page.

Remember, in Jekyll you are an end-user. Your API has only two components:

1. The manner in which you setup your directory.
2. The liquid syntax and variables passed into the liquid templates.

All the data objects available to you in the templates via Liquid are outlined in the **API Section** of Jekyll-Bootstrap.
You can also read the original documentation here: <https://github.com/mojombo/jekyll/wiki/Template-Data>

## Conclusion

I hope this paints a clearer picture of what Jekyll is doing and why it works the way it does.
As noted, our main programming constraint is the fact that our API is limited to what is accessible via Liquid and Liquid only.

Jekyll-bootstrap is intended to provide helper methods and strategies aimed at making it more intuitive and easier to work with Jekyll =)

**Thank you** for reading this far.

## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }}) 
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.