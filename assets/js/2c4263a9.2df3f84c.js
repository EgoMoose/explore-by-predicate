"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[177],{76937:e=>{e.exports=JSON.parse('{"functions":[{"name":"byPredicate","desc":"Travels Breadth-First through the descendants of `root` until it finds an Instance \\nthat passes the conditions of the predicate.\\n\\n```lua\\nlocal found = byPredicate(workspace, true, function(descendant)\\n\\t-- looking for the first descendant of workspace that\'s a BasePart and has a certain color\\n\\treturn descendant:IsA(\\"BasePart\\") and descendant.Color = Color3.fromRGB(100, 120, 80)\\nend):expect()\\n```","params":[{"name":"root","desc":"","lua_type":"Instance"},{"name":"recursive","desc":"Whether or not the search should be conducted recursively.","lua_type":"boolean"},{"name":"predicate?","desc":"The conditions under which the search has successfully found a result.","lua_type":"(Instance) -> boolean"}],"returns":[{"desc":"The result of the search wrapped as a promise.","lua_type":"Promise<Instance?>"}],"function_type":"static","source":{"line":101,"path":"src/FindFirstChild.luau"}},{"name":"byName","desc":"Travels Breadth-First through the descendants of `root` until it finds an Instance with the provided Name.\\n\\n```lua\\nlocal found = byName(workspace, false, \\"Terrain\\"):expect()\\n```","params":[{"name":"root","desc":"","lua_type":"Instance"},{"name":"recursive","desc":"Whether or not the search should be conducted recursively.","lua_type":"boolean"},{"name":"name","desc":"The name of the Instance being searched for.","lua_type":"string"}],"returns":[{"desc":"The result of the search wrapped as a promise.","lua_type":"Promise<Instance?>"}],"function_type":"static","source":{"line":120,"path":"src/FindFirstChild.luau"}},{"name":"ofClass","desc":"Travels Breadth-First through the descendants of `root` until it finds an Instance with the provided ClassName.\\n\\n```lua\\nlocal found = ofClass(workspace, false, \\"Part\\"):expect()\\n```","params":[{"name":"root","desc":"","lua_type":"Instance"},{"name":"recursive","desc":"Whether or not the search should be conducted recursively.","lua_type":"boolean"},{"name":"className","desc":"The class name of the Instance being searched for.","lua_type":"string"}],"returns":[{"desc":"The result of the search wrapped as a promise.","lua_type":"Promise<Instance?>"}],"function_type":"static","source":{"line":139,"path":"src/FindFirstChild.luau"}},{"name":"whichIsA","desc":"Travels Breadth-First through the descendants of `root` until it finds an Instance with a class \\nequivalent to or a subclass of a given class.\\n\\n```lua\\nlocal found = whichIsA(workspace, false, \\"BasePart\\"):expect()\\n```","params":[{"name":"root","desc":"","lua_type":"Instance"},{"name":"recursive","desc":"Whether or not the search should be conducted recursively.","lua_type":"boolean"},{"name":"className","desc":"The class name of the Instance being searched for.","lua_type":"string"}],"returns":[{"desc":"The result of the search wrapped as a promise.","lua_type":"Promise<Instance?>"}],"function_type":"static","source":{"line":159,"path":"src/FindFirstChild.luau"}},{"name":"byPath","desc":"Travels the path starting from the `root` until it either cannot find the next step in the path or\\nresolves the entire path.\\n\\n```lua\\nlocal found = byPath(game, { \\"Workspace\\", \\"Terrain\\" }):expect()\\n```","params":[{"name":"root","desc":"","lua_type":"Instance"},{"name":"path","desc":"The path by name from the root to the target Instance.","lua_type":"{ string }"}],"returns":[{"desc":"The result of the search wrapped as a promise.","lua_type":"Promise<Instance?>"}],"function_type":"static","source":{"line":178,"path":"src/FindFirstChild.luau"}}],"properties":[],"types":[],"name":"FindFirstChild","desc":"FindFirstChild is a set of functions that search for descendants conditionally.","source":{"line":15,"path":"src/FindFirstChild.luau"}}')}}]);