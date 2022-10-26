import hljs = require("highlight.js");
import razor = require("highlightjs-cshtml-razor");

hljs.registerLanguage("cshtml", razor)

function highlight(lang: string, code: string) {
    if (lang?.toLowerCase() !== "cshtml") {
        return {
            body: code,
            html: false
        }
    }

    try {
        return hljs.highlight(code, {
            language: "cshtml"
        }).value;
    } catch (e) {
        console.error(e);
    }

    return {
        body: code,
        html: false
    }
}

export const blocks = {
    code: function (block: any) {
        return highlight(block.kwargs.language, block.body);
    }
}
