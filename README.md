# Aula 06-06

## Projeto Ionic

#### Instalação CLI

```shell
npm i -g @angular/cli@16.2.14
```

#### Cria a estrutura base do projeto
```shell
 bruno@fedora  ~/projetos/ipog/mobile  ionic start                                                                              
? Use the app creation wizard? No

Pick a framework! 😁

Please select the JavaScript framework to use for your new app. To bypass this prompt next time, supply a value for the
--type option.

? Framework: Angular

Every great app needs a name! 😍

Please enter the full name of your app. You can change this at any time. To bypass this prompt next time, supply name,
the first argument to ionic start.

? Project name: ionic-dragon-ball-z

Let's pick the perfect starter template! 💪

Starter templates are ready-to-go Ionic apps that come packed with everything you need to build your app. To bypass this
prompt next time, supply template, the second argument to ionic start.

? Starter template: tabs
? Would you like to build your app with NgModules or Standalone Components? 
 Standalone components are a new way to build with Angular that simplifies the way you build your app. 
 To learn more, visit the Angular docs:
 https://angular.io/guide/standalone-components

 NgModules
✔ Preparing directory ./ionic-dragon-ball-z in 2.37ms
✔ Downloading and extracting tabs starter in 702.18ms
> ionic integrations enable capacitor --quiet -- ionic-dragon-ball-z io.ionic.starter
> npm i --save -E @capacitor/core@latest
npm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

added 1213 packages, and audited 1214 packages in 51s

219 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
> npm i -D -E @capacitor/cli@latest

added 57 packages, and audited 1271 packages in 6s

223 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
> npm i --save -E @capacitor/haptics @capacitor/app @capacitor/keyboard @capacitor/status-bar

added 4 packages, and audited 1275 packages in 7s

223 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
> capacitor init ionic-dragon-ball-z io.ionic.starter --web-dir www
✔ Creating capacitor.config.ts in /home/bruno/projetos/ipog/mobile/ionic-dragon-ball-z in 8.05ms
[success] capacitor.config.ts created!

Next steps: 
https://capacitorjs.com/docs/getting-started#where-to-go-next
[OK] Integration capacitor added!

Installing dependencies may take several minutes.

  ──────────────────────────────────────────────────────────────

        Ionic Appflow, the mobile DevOps solution by Ionic

           Continuously build, deploy, and ship apps 🚀
        Focus on building apps while we automate the rest 🎁

                 👉  https://ion.link/appflow  👈

  ──────────────────────────────────────────────────────────────


> npm i

up to date, audited 1275 packages in 6s

223 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
> git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint:
hint: 	git config --global init.defaultBranch <name>
hint:
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint:
hint: 	git branch -m <name>
Initialized empty Git repository in /home/bruno/projetos/ipog/mobile/ionic-dragon-ball-z/.git/

Join the Ionic Community! 💙

Connect with millions of developers on the Ionic Forum and get access to live events, news updates, and more.

? Create free Ionic account? No
> git add -A
> git commit -m "Initial commit" --no-gpg-sign
[master (root-commit) eec7714] Initial commit
 61 files changed, 18771 insertions(+)
 create mode 100644 .browserslistrc
 create mode 100644 .editorconfig
 create mode 100644 .eslintrc.json
 create mode 100644 .gitignore
 create mode 100644 .vscode/extensions.json
 create mode 100644 .vscode/settings.json
 create mode 100644 angular.json
 create mode 100644 capacitor.config.ts
 create mode 100644 ionic.config.json
 create mode 100644 karma.conf.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/app/app-routing.module.ts
 create mode 100644 src/app/app.component.html
 create mode 100644 src/app/app.component.scss
 create mode 100644 src/app/app.component.spec.ts
 create mode 100644 src/app/app.component.ts
 create mode 100644 src/app/app.module.ts
 create mode 100644 src/app/explore-container/explore-container.component.html
 create mode 100644 src/app/explore-container/explore-container.component.scss
 create mode 100644 src/app/explore-container/explore-container.component.spec.ts
 create mode 100644 src/app/explore-container/explore-container.component.ts
 create mode 100644 src/app/explore-container/explore-container.module.ts
 create mode 100644 src/app/tab1/tab1-routing.module.ts
 create mode 100644 src/app/tab1/tab1.module.ts
 create mode 100644 src/app/tab1/tab1.page.html
 create mode 100644 src/app/tab1/tab1.page.scss
 create mode 100644 src/app/tab1/tab1.page.spec.ts
 create mode 100644 src/app/tab1/tab1.page.ts
 create mode 100644 src/app/tab2/tab2-routing.module.ts
 create mode 100644 src/app/tab2/tab2.module.ts
 create mode 100644 src/app/tab2/tab2.page.html
 create mode 100644 src/app/tab2/tab2.page.scss
 create mode 100644 src/app/tab2/tab2.page.spec.ts
 create mode 100644 src/app/tab2/tab2.page.ts
 create mode 100644 src/app/tab3/tab3-routing.module.ts
 create mode 100644 src/app/tab3/tab3.module.ts
 create mode 100644 src/app/tab3/tab3.page.html
 create mode 100644 src/app/tab3/tab3.page.scss
 create mode 100644 src/app/tab3/tab3.page.spec.ts
 create mode 100644 src/app/tab3/tab3.page.ts
 create mode 100644 src/app/tabs/tabs-routing.module.ts
 create mode 100644 src/app/tabs/tabs.module.ts
 create mode 100644 src/app/tabs/tabs.page.html
 create mode 100644 src/app/tabs/tabs.page.scss
 create mode 100644 src/app/tabs/tabs.page.spec.ts
 create mode 100644 src/app/tabs/tabs.page.ts
 create mode 100644 src/assets/icon/favicon.png
 create mode 100644 src/assets/shapes.svg
 create mode 100644 src/environments/environment.prod.ts
 create mode 100644 src/environments/environment.ts
 create mode 100644 src/global.scss
 create mode 100644 src/index.html
 create mode 100644 src/main.ts
 create mode 100644 src/polyfills.ts
 create mode 100644 src/test.ts
 create mode 100644 src/theme/variables.scss
 create mode 100644 src/zone-flags.ts
 create mode 100644 tsconfig.app.json
 create mode 100644 tsconfig.json
 create mode 100644 tsconfig.spec.json

Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd ./ionic-dragon-ball-z
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition
 bruno@fedora  ~/projetos/ipog/mobile  cd ./ionic-dragon-ball-z       
 bruno@fedora  ~/projetos/ipog/mobile/ionic-dragon-ball-z   master  ionic serve                                          
> ng run app:serve --host=localhost --port=8100

```
#### Passos

#### Criar módulo core
```shell
ionic g m core                                       
> ng generate module core --project=app
CREATE src/app/core/core.module.ts (190 bytes)
[OK] Generated module!

```

#### Criar módulo shared
```shell
ionic g m shared
> ng generate module shared --project=app
CREATE src/app/shared/shared.module.ts (192 bytes)
[OK] Generated module!
```
#### Criar pasta pages
```shell
mkdir src/app/pages      
```

#### Criar módulo Splash Screen
```shell
ionic g page pages/splash                
> ng generate page pages/splash --project=app
CREATE src/app/pages/splash/splash-routing.module.ts (347 bytes)
CREATE src/app/pages/splash/splash.module.ts (472 bytes)
CREATE src/app/pages/splash/splash.page.scss (0 bytes)
CREATE src/app/pages/splash/splash.page.html (302 bytes)
CREATE src/app/pages/splash/splash.page.spec.ts (445 bytes)
CREATE src/app/pages/splash/splash.page.ts (256 bytes)
UPDATE src/app/app-routing.module.ts (540 bytes)
[OK] Generated page!
```

### Criar o módulo da Página Home
```shell
ionic g page pages/home  
> ng generate page pages/home --project=app
CREATE src/app/pages/home/home-routing.module.ts (339 bytes)
CREATE src/app/pages/home/home.module.ts (458 bytes)
CREATE src/app/pages/home/home.page.scss (0 bytes)
CREATE src/app/pages/home/home.page.html (298 bytes)
CREATE src/app/pages/home/home.page.spec.ts (433 bytes)
CREATE src/app/pages/home/home.page.ts (248 bytes)
UPDATE src/app/app-routing.module.ts (655 bytes)
[OK] Generated page!
```

#### Criar módulo characters
```shell
ionic g page pages/characters    
> ng generate page pages/characters --project=app
CREATE src/app/pages/characters/characters-routing.module.ts (363 bytes)
CREATE src/app/pages/characters/characters.module.ts (500 bytes)
CREATE src/app/pages/characters/characters.page.scss (0 bytes)
CREATE src/app/pages/characters/characters.page.html (310 bytes)
CREATE src/app/pages/characters/characters.page.spec.ts (469 bytes)
CREATE src/app/pages/characters/characters.page.ts (272 bytes)
UPDATE src/app/app-routing.module.ts (794 bytes)
[OK] Generated page!
```

#### Exclusão itens módulo characters
```shell
REMOVER src/app/pages/characters/characters.page.scss (0 bytes)
REMOVER src/app/pages/characters/characters.page.html (310 bytes)
REMOVER src/app/pages/characters/characters.page.spec.ts (469 bytes)
REMOVER src/app/pages/characters/characters.page.ts (272 bytes)
```

#### Criar service characters
```shell
ionic g s pages/characters/characters                
> ng generate service pages/characters/characters --project=app
CREATE src/app/pages/characters/characters.service.spec.ts (377 bytes)
CREATE src/app/pages/characters/characters.service.ts (139 bytes)
[OK] Generated service!

```

#### Criar interface(model) characters
```shell
ionic g i pages/characters/characters
> ng generate interface pages/characters/characters --project=app
CREATE src/app/pages/characters/characters.ts (32 bytes)
[OK] Generated interface!
```

#### Criar componente characters-list
```shell
ionic g c pages/characters/characters-list
> ng generate component pages/characters/characters-list --project=app
CREATE src/app/pages/characters/characters-list/characters-list.component.scss (0 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.html (34 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.spec.ts (753 bytes)
CREATE src/app/pages/characters/characters-list/characters-list.component.ts (304 bytes)
[OK] Generated component!

```

#### Criar componente characters-detail
```shell
ionic g c pages/characters/characters-detail
> ng generate component pages/characters/characters-detail --project=app
CREATE src/app/pages/characters/characters-detail/characters-detail.component.scss (0 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.html (36 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.spec.ts (767 bytes)
CREATE src/app/pages/characters/characters-detail/characters-detail.component.ts (312 bytes)
[OK] Generated component!
```

#### Criar módulo planets
```shell
ionic g page pages/planets          
> ng generate page pages/planets --project=app
CREATE src/app/pages/planets/planets-routing.module.ts (351 bytes)
CREATE src/app/pages/planets/planets.module.ts (479 bytes)
CREATE src/app/pages/planets/planets.page.scss (0 bytes)
CREATE src/app/pages/planets/planets.page.html (304 bytes)
CREATE src/app/pages/planets/planets.page.spec.ts (451 bytes)
CREATE src/app/pages/planets/planets.page.ts (260 bytes)
UPDATE src/app/app-routing.module.ts (921 bytes)
[OK] Generated page!
```

#### Criar componente planets-list
```shell
ionic g c pages/planets/planets-list
> ng generate component pages/planets/planets-list --project=app
CREATE src/app/pages/planets/planets-list/planets-list.component.scss (0 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.html (31 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.spec.ts (732 bytes)
CREATE src/app/pages/planets/planets-list/planets-list.component.ts (292 bytes)
[OK] Generated component!
```
#### Criar componente planets-detail
```shell
ionic g c pages/planets/planets-detail
> ng generate component pages/planets/planets-detail --project=app
CREATE src/app/pages/planets/planets-detail/planets-detail.component.scss (0 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.html (33 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.spec.ts (746 bytes)
CREATE src/app/pages/planets/planets-detail/planets-detail.component.ts (300 bytes)
[OK] Generated component!
```