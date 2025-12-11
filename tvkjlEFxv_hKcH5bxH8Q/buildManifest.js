self.__BUILD_MANIFEST = function(s, c) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [],
            fallback: []
        },
        "/": [s, c, "static/chunks/pages/index-70b0a261a25f745f.js"],
        "/_error": ["static/chunks/pages/_error-5a00309fd5f4b49e.js"],
        "/about": [s, "static/chunks/365-ddcd33d8898a594c.js", c, "static/chunks/pages/about-ad3fd75b9a604d75.js"],
        "/contact": [s, c, "static/chunks/pages/contact-df3aeec07bc6c46c.js"],
        "/hacks": [s, c, "static/chunks/pages/hacks-d4e129d671b3050f.js"],
        "/projects": [s, c, "static/chunks/pages/projects-502e860801a80e7f.js"],
        "/reminder": [s, c, "static/chunks/pages/reminder-deea8220986f8462.js"],
        "/stack": [s, c, "static/chunks/pages/stack-5276d31ab44b8f1d.js"],
        sortedPages: ["/", "/_app", "/_error", "/about", "/contact", "/hacks", "/projects", "/reminder", "/stack"]
    }
}("static/chunks/701-af055098dcdfe3ef.js", "static/chunks/763-5bfc4d76af04530f.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
