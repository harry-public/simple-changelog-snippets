const vscode = require('vscode');
async function activate(context) {
  let changelogSnippets = vscode.languages.registerCompletionItemProvider(['markdown', 'plaintext'], {

    provideCompletionItems(document, position, token, context) {

      const changelogSnippetsConfig = vscode.workspace.getConfiguration('simpleChangelogSnippets');

      // snippet starter
      const changelogSnippetsStarter = new vscode.CompletionItem("changelog.starter");
      changelogSnippetsStarter.insertText = new vscode.SnippetString(
        "# Changelog\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/)."
      );
      changelogSnippetsStarter.documentation = new vscode.MarkdownString(
        "Template for changelog (`will add a starter template`)"
      );

      // snippet basic
      const changelogSnippetsBasic = new vscode.CompletionItem("changelog.basic");
      changelogSnippetsBasic.insertText = new vscode.SnippetString(
        "## [${1:Unreleased}] - ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}\n- ${2:Intial release}"
      );
      changelogSnippetsBasic.documentation = new vscode.MarkdownString(
        "Template for changelog (`will add basic changelog template`)"
      );

      // snippet choose options
      const changelogSnippets = new vscode.CompletionItem("changelog");
      changelogSnippets.insertText = new vscode.SnippetString(
        "## [${1:version}] - ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}\n\n### ${2|Added,Changed,Deprecated,Removed,Fixed,Security|}\n- ${3:changes...}"
      );
      changelogSnippets.documentation = new vscode.MarkdownString(
        "Template for changelog (`will add choosable changelog template`)"
      );

      // snippet all
      const changelogSnippetsAll = new vscode.CompletionItem("changelog.all");
      changelogSnippetsAll.insertText = new vscode.SnippetString(
        "## [${1:version}] - " + changelogSnippetsConfig.dateFormat + "${2:\n\n### Added\n- ${3:what did you add?}}${4:\n\n### Changed\n- ${5:what did you change?}}${6:\n\n### Deprecated\n- ${7:what is about to be removed ?}}${8:\n\n### Removed\n- ${9:what did you remove?}}${10:\n\n### Fixed\n- ${11:what did you fix?}}${12:\n\n### Security\n- ${13:security issue?}}"
      );
      changelogSnippetsAll.documentation = new vscode.MarkdownString(
        "Template for changelog (`will add Added, Changed, fixed, and others...`)"
      );

      // return all completion items as array
      return [
        changelogSnippetsStarter,
        changelogSnippetsBasic,
        changelogSnippets,
        changelogSnippetsAll
      ];
    }
  });
  context.subscriptions.push(changelogSnippets);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
module.exports = {
  activate,
  deactivate
}