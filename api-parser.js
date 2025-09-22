class APIDocumentationParser {
    constructor() {
        this.uncApiFiles = [
            'cache.md', 'closures.md', 'console.md', 'crypt.md', 
            'debug.md', 'Drawing.md', 'filesystem.md', 'input.md', 
            'instances.md', 'metatable.md', 'misc.md', 'scripts.md', 'WebSocket.md'
        ];
        
        this.suncApiStructure = {
            'Closures': [
                'clonefunction.md', 'getfunctionhash.md', 'hookfunction.md', 
                'hookmetamethod.md', 'iscclosure.md', 'isexecutorclosure.md', 
                'islclosure.md', 'newcclosure.md'
            ],
            'Cryptography': [
                'crypt.base64decode.md', 'crypt.base64encode.md'
            ],
            'Debug': [
                'debug.getconstant.md', 'debug.getconstants.md', 'debug.getproto.md',
                'debug.getprotos.md', 'debug.getstack.md', 'debug.getupvalue.md',
                'debug.getupvalues.md', 'debug.setconstant.md', 'debug.setstack.md',
                'debug.setupvalue.md'
            ],
            'Drawing': [
                'Drawing.Objects.md', 'Drawing.new.md', 'cleardrawcache.md',
                'getrenderproperty.md', 'isrenderobj.md', 'setrenderproperty.md'
            ],
            'Environment': [
                'filtergc.md', 'getgc.md', 'getgenv.md', 'getrenv.md'
            ],
            'Filesystem': [
                'appendfile.md', 'delfile.md', 'delfolder.md', 'getcustomasset.md',
                'isfile.md', 'isfolder.md', 'listfiles.md', 'loadfile.md',
                'makefolder.md', 'readfile.md', 'writefile.md'
            ],
            'Instances': [
                'cloneref.md', 'compareinstances.md', 'fireclickdetector.md',
                'fireproximityprompt.md', 'firetouchinterest.md', 'getcallbackvalue.md',
                'gethui.md', 'getinstances.md', 'getnilinstances.md'
            ],
            'Metatables': [
                'getrawmetatable.md', 'isreadonly.md', 'setrawmetatable.md', 'setreadonly.md'
            ],
            'Miscellaneous': [
                'identifyexecutor.md', 'request.md'
            ],
            'Reflection': [
                'checkcaller.md', 'gethiddenproperty.md', 'getthreadidentity.md',
                'sethiddenproperty.md', 'setscriptable.md', 'setthreadidentity.md'
            ],
            'Scripts': [
                'getcallingscript.md', 'getloadedmodules.md', 'getrunningscripts.md',
                'getscriptbytecode.md', 'getscriptclosure.md', 'getscripthash.md',
                'getscripts.md', 'getsenv.md', 'loadstring.md'
            ],
            'Signals': [
                'The.Connection.object.md', 'firesignal.md', 'getconnections.md', 'replicatesignal.md'
            ],
            'Websocket': [
                'WebSocket.connect.md'
            ]
        };
        
        this.apiCompletions = [];
        this.apiGlobals = [];
    }

    async loadAPIDocumentation() {
        console.log('[ INFO ] Loading API documentation files from UNC and SUNC APIs...');
        
        try {
            const allPromises = [];
            
            console.log('[ INFO ] Loading UNC API files...');
            const uncPromises = this.uncApiFiles.map(file => 
                this.loadAndParseFile(file, 'unc-api')
            );
            allPromises.push(...uncPromises);
            
            console.log('[ INFO ] Loading SUNC API files...');
            for (const [category, files] of Object.entries(this.suncApiStructure)) {
                const categoryPromises = files.map(file => 
                    this.loadAndParseFile(`${category}/${file}`, 'sunc-api', category)
                );
                allPromises.push(...categoryPromises);
            }
            
            const results = await Promise.all(allPromises);
            
            this.apiCompletions = results.flat().filter(item => item !== null);
            
            const uncCount = results.slice(0, this.uncApiFiles.length).flat().length;
            const suncCount = results.slice(this.uncApiFiles.length).flat().length;
            
            console.log('[ SUCCESS ] Loaded', this.apiCompletions.length, 'total API functions');
            console.log('[ INFO ] UNC API:', uncCount, 'functions | SUNC API:', suncCount, 'functions');
            console.log('[ INFO ] SUNC Categories covered:', Object.keys(this.suncApiStructure).length);
            console.log('[ INFO ] Total API files processed:', this.uncApiFiles.length + Object.values(this.suncApiStructure).flat().length);
            return this.apiCompletions;
        } catch (error) {
            console.log('[ ERROR ] Failed to load API documentation:', error.message);
            return [];
        }
    }

    async loadAndParseFile(filename, apiSource, category = null) {
        try {
            const fullPath = `./${apiSource}/${filename}`;
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status}`);
            }
            
            const content = await response.text();
            const sourceInfo = category ? `${apiSource}/${category}` : apiSource;
            return this.parseMarkdownContent(content, filename, sourceInfo);
        } catch (error) {
            console.log('[ ERROR ] Error loading', filename, 'from', apiSource + ':', error.message);
            return [];
        }
    }

    parseMarkdownContent(content, filename, sourceInfo) {
        const completions = [];
        const lines = content.split('\n');
        let currentFunction = null;
        let inCodeBlock = false;
        let codeBlockContent = '';
        let description = '';
        let parameters = [];
        let aliases = [];
        let isGlobal = false;
        let isYields = false;
        let hasCompatibilityIssues = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (line.startsWith('{% hint')) {
                while (i < lines.length && !lines[i].trim().startsWith('{% endhint %}')) {
                    i++;
                }
                continue;
            }

            if ((line.startsWith('## ') && line.length > 3) || 
                (line.startsWith('# ') && line.length > 2 && !line.includes(' ') && filename.endsWith('.md'))) {
                if (currentFunction) {
                    completions.push(this.createCompletionItem(
                        currentFunction, codeBlockContent, description, 
                        parameters, aliases, isGlobal, isYields, 
                        hasCompatibilityIssues, sourceInfo
                    ));
                }

                currentFunction = line.startsWith('## ') ? line.substring(3) : line.substring(2);
                codeBlockContent = '';
                description = '';
                parameters = [];
                aliases = [];
                isGlobal = false;
                isYields = false;
                hasCompatibilityIssues = false;
                continue;
            }

            if (line.includes('🌎 Global')) {
                isGlobal = true;
                continue;
            }
            if (line.includes('⏰ Yields')) {
                isYields = true;
                continue;
            }
            if (line.includes('🪲 Compatibility')) {
                hasCompatibilityIssues = true;
                continue;
            }

            if (line.startsWith('```lua')) {
                inCodeBlock = true;
                continue;
            }
            if (line === '```' && inCodeBlock) {
                inCodeBlock = false;
                continue;
            }
            if (inCodeBlock) {
                codeBlockContent += line + '\n';
                continue;
            }

            if (line.startsWith('### Parameters') || line.startsWith('## Parameter')) {
                for (let j = i + 1; j < lines.length && !lines[j].startsWith('###') && !lines[j].startsWith('##') && !lines[j].startsWith('***'); j++) {
                    const paramLine = lines[j].trim();
                    if (paramLine.startsWith('* `') && paramLine.includes('` - ')) {
                        const paramMatch = paramLine.match(/\* `(.+?)` - (.+)/);
                        if (paramMatch) {
                            parameters.push({
                                name: paramMatch[1],
                                description: paramMatch[2]
                            });
                        }
                    }
                        
                    else if (paramLine.startsWith('* `') && paramLine.includes('` - ')) {
                        const paramMatch = paramLine.match(/\* `(.+?)` - (.+)/);
                        if (paramMatch) {
                            parameters.push({
                                name: paramMatch[1],
                                description: paramMatch[2]
                            });
                        }
                    }
                }
                continue;
            }

            if (line.startsWith('### Aliases')) {
                for (let j = i + 1; j < lines.length && !lines[j].startsWith('###') && !lines[j].startsWith('##'); j++) {
                    const aliasLine = lines[j].trim();
                    if (aliasLine.startsWith('* `') && aliasLine.endsWith('`')) {
                        const alias = aliasLine.slice(2, -1);
                        aliases.push(alias);
                    }
                }
                continue;
            }

            if (line && !line.startsWith('#') && !line.startsWith('|') && 
                !line.startsWith('---') && !line.startsWith('*') && 
                !line.startsWith('>') && !line.includes('🌎') && 
                !line.includes('⏰') && !line.includes('🪲') && 
                !line.startsWith('```')) {
                if (description) description += ' ';
                description += line;
            }
        }

        if (currentFunction) {
            completions.push(this.createCompletionItem(
                currentFunction, codeBlockContent, description, 
                parameters, aliases, isGlobal, isYields, 
                hasCompatibilityIssues, sourceInfo
            ));
        }

        return completions.filter(item => item !== null);
    }

    createCompletionItem(functionName, codeBlock, description, parameters, aliases, isGlobal, isYields, hasCompatibilityIssues, sourceInfo) {
        if (!functionName || !codeBlock) return null;

        const functionMatch = codeBlock.match(/function\s+(.+?)\(/);
        if (!functionMatch) return null;

        const fullSignature = codeBlock.trim();
        const functionCall = functionMatch[1];
        
        let kind = monaco.languages.CompletionItemKind.Function;
        if (isGlobal) {
            kind = monaco.languages.CompletionItemKind.Variable;
            this.apiGlobals.push(functionCall);
        }
        
        let insertText = functionCall;
        let snippetParams = '';
        
        if (parameters.length > 0) {
            const paramSnippets = parameters.map((param, index) => {
                const isOptional = param.name.includes('?') || param.description.toLowerCase().includes('optional');
                return `\${${index + 1}:${param.name.replace('?', '').replace(':', '')}}`;
            });
            snippetParams = paramSnippets.join(', ');
            insertText = `${functionCall}(${snippetParams})`;
        } else if (fullSignature.includes('(') && fullSignature.includes(')')) {
        
            const paramMatch = fullSignature.match(/\(([^)]+)\)/);
            if (paramMatch && paramMatch[1].trim() !== '') {
                const params = paramMatch[1].split(',').map((p, i) => `\${${i + 1}:${p.trim().split(':')[0]}}`);
                insertText = `${functionCall}(${params.join(', ')})`;
            } else {
                insertText = `${functionCall}()`;
            }
        }

        let documentation = description || `${functionName} function`;
        
        if (isYields) documentation = '⏰ **Yields** - ' + documentation;
        if (isGlobal) documentation = '🌎 **Global Function** - ' + documentation;
        if (hasCompatibilityIssues) documentation = '🪲 **Compatibility Issues** - ' + documentation;
        
        documentation += '\n\n**Signature:**\n```lua\n' + fullSignature + '\n```';
        
        if (parameters.length > 0) {
            documentation += '\n\n**Parameters:**\n';
            parameters.forEach(param => {
                documentation += `• **${param.name}** - ${param.description}\n`;
            });
        }
        
        if (aliases.length > 0) {
            documentation += '\n\n**Aliases:** ' + aliases.map(a => `\`${a}\``).join(', ');
        }
        
        documentation += `\n\n*From: ${sourceInfo}*`;

        const completionItem = {
            label: functionCall,
            kind: kind,
            insertText: insertText,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: {
                value: documentation,
                isTrusted: true
            },
            detail: fullSignature,
            sortText: isGlobal ? '0000' + functionCall : '1000' + functionCall // Prioritize globals
        };

        return completionItem;
    }

    getAPIFunctionNames() {
        return this.apiCompletions.map(item => item.label);
    }

    getGlobalAPIFunctions() {
        return this.apiGlobals;
    }

    getCompletionsForPrefix(prefix) {
        if (!prefix) return this.apiCompletions;
        
        const lowercasePrefix = prefix.toLowerCase();
        return this.apiCompletions.filter(item => 
            item.label.toLowerCase().startsWith(lowercasePrefix) ||
            item.label.toLowerCase().includes(lowercasePrefix)
        );
    }
}

window.APIDocumentationParser = APIDocumentationParser;