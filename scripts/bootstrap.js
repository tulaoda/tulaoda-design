const { existsSync, writeFileSync, readdirSync } = require('fs');
const { join } = require('path');
const { yParser } = require('@umijs/utils');

(async () => {
  const args = yParser(process.argv);
  const version = '1.0.0-beta.1';

  const pkgs = readdirSync(join(__dirname, '../packages')).filter((pkg) => pkg.charAt(0) !== '.');

  pkgs.forEach((shortName) => {
    const name = `@tulaoda/rc-${shortName}`;

    const pkgJSONPath = join(__dirname, '..', 'packages', shortName, 'package.json');
    const pkgJSONExists = existsSync(pkgJSONPath);
    let json;
    if (args.force || !pkgJSONExists) {
      json = {
        name,
        version,
        description: name,
        module: 'es/index.js',
        main: 'lib/index.js',
        types: 'lib/index.d.ts',
        files: ['lib', 'src', 'dist', 'es'],
        repository: {
          type: 'git',
          url: 'https://github.com/tulaoda/tulaoda-design',
        },
        browserslist: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11'],
        keywords: ['antd', 'react'],
        authors: ['tulaoda <coderaxin@163.com> (https://github.com/tulaoda)'],
        license: 'MIT',
        bugs: 'http://github.com/tulaoda/tulaoda-design/issues',
        homepage: `https://github.com/tulaoda/tulaoda-design/tree/master/packages/${shortName}#readme`,
        peerDependencies: {
          umi: '3.x',
        },
        publishConfig: {
          access: 'public',
        },
      };
      if (pkgJSONExists) {
        const pkg = require(pkgJSONPath);
        [
          'dependencies',
          'devDependencies',
          'peerDependencies',
          'bin',
          'version',
          'files',
          'authors',
          'types',
          'sideEffects',
          'main',
          'module',
          'description',
        ].forEach((key) => {
          if (pkg[key]) json[key] = pkg[key];
        });
      }
      writeFileSync(pkgJSONPath, `${JSON.stringify(json, null, 2)}\n`);
    }

    const readmePath = join(__dirname, '..', 'packages', shortName, 'README.md');
    if (args.force || !existsSync(readmePath)) {
      writeFileSync(
        readmePath,
        `# ${name}

> ${json.description}.

See our website [${name}](https://umijs.org/plugins/${shortName}) for more information.

## Install

Using npm:

\`\`\`bash
$ npm install --save ${name}
\`\`\`

or using yarn:

\`\`\`bash
$ yarn add ${name}
\`\`\`
`,
      );
    }
  });
})();
