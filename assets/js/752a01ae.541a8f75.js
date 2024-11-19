"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4661],{51290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var i=t(85893),a=t(11151);const o={title:"Introducing CaptainAgent for Adaptive Team Building",authors:["jialeliu","LinxinS97","jieyuz2"],tags:["LLM","GPT","AutoBuild"]},r="Introduction",s={permalink:"/ag2/blog/2024/11/15/CaptainAgent",source:"@site/blog/2024-11-15-CaptainAgent/index.mdx",title:"Introducing CaptainAgent for Adaptive Team Building",description:"Illustration of how CaptainAgent build a team",date:"2024-11-15T00:00:00.000Z",formattedDate:"November 15, 2024",tags:[{label:"LLM",permalink:"/ag2/blog/tags/llm"},{label:"GPT",permalink:"/ag2/blog/tags/gpt"},{label:"AutoBuild",permalink:"/ag2/blog/tags/auto-build"}],readingTime:3.89,hasTruncateMarker:!1,authors:[{name:"Jiale Liu",title:"PhD student at Pennsylvania State University",url:"https://github.com/LeoLjl",imageURL:"https://github.com/leoljl.png",key:"jialeliu"},{name:"Linxin Song",title:"PhD student at the University of Southern California",url:"https://linxins.net",imageURL:"https://github.com/LinxinS97.png",key:"LinxinS97"},{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],frontMatter:{title:"Introducing CaptainAgent for Adaptive Team Building",authors:["jialeliu","LinxinS97","jieyuz2"],tags:["LLM","GPT","AutoBuild"]},unlisted:!1,nextItem:{title:"Unlocking the Power of Agentic Workflows at Nexla with Autogen",permalink:"/ag2/blog/2024/10/23/NOVA"}},l={authorsImageUrls:[void 0,void 0,void 0]},g=[];function c(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Illustration of how CaptainAgent build a team",src:t(74612).Z+"",width:"7880",height:"3008"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TL;DR"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We introduce CaptainAgent, an agent equipped with the capability to adaptively assemble a team of agents through retrieval-selection-generation process to handle complex tasks via the ",(0,i.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/tutorial/conversation-patterns#nested-chats",children:(0,i.jsx)(n.code,{children:"nested chat"})})," conversation pattern in AG2."]}),"\n",(0,i.jsxs)(n.li,{children:["CaptainAgent supports all types of ",(0,i.jsx)(n.code,{children:"ConversableAgents"})," implemented in AG2."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Given an ad-hoc task, dynamically assembling a group of agents capable of effectively solving the problem is a complex challenge. In many cases, we manually design and select the agents involved. In this blog, we introduce ",(0,i.jsx)(n.strong,{children:"CaptainAgent"}),", an intelligent agent that can autonomously assemble a team of agents tailored to meet diverse and complex task requirements.\nCaptainAgent iterates over the following two steps until the problem is successfully solved."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["(",(0,i.jsx)(n.strong,{children:"Step 1"}),") CaptainAgent will break down the task, recommend several roles needed for each subtask, and then create a team of agents accordingly. Each agent in the team is either generated from scratch or retrieved and selected from an agent library if provided. Each of them will also be equipped with predefined tools retrieved from a tool library if provided.\n",(0,i.jsx)(n.img,{alt:"Building workflow",src:t(20450).Z+"",width:"6700",height:"6970"})]}),"\n",(0,i.jsxs)(n.li,{children:["(",(0,i.jsx)(n.strong,{children:"Step 2"}),") For each subtask, the corresponding team of agents will jointly solve it. Once it's done, a summarization and reflection step will be triggered to generate a report based on the multi-agent conversation history. Based on the report, CaptainAgent will decide whether to adjust the subtasks and corresponding team (go to Step 1) or to terminate and output the results.\n",(0,i.jsx)(n.img,{alt:"Building workflow",src:t(63361).Z+"",width:"4738",height:"3472"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The design of CaptainAgent allows it to leverage agents and tools from a pre-specified agent library and tool library. In the following section, we demonstrate how to use CaptainAgent with or without the provided library."}),"\n",(0,i.jsx)(n.h1,{id:"using-captainagent-without-pre-specified-agenttool-libraries",children:"Using CaptainAgent without pre-specified agent/tool libraries"}),"\n",(0,i.jsxs)(n.p,{children:["CaptainAgent can serve as a drop-in replacement for the general ",(0,i.jsx)(n.code,{children:"AssistantAgent"})," class in AG2. To do that we just need to add a few lines of configurations for the group chat involved.\nWithout the agent library and tool library, CaptainAgent will automatically generate a set of agents into a group chat."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from autogen.agentchat.contrib.captain_agent import CaptainAgent\nfrom autogen import UserProxyAgent\n\ngeneral_llm_config = {\n    "temperature": 0,\n    "config_list": autogen.config_list_from_json("OAI_CONFIG_LIST", filter_dict={"model": ["gpt-4-1106-preview"]}),\n}\n\nnested_mode_config = {\n    "autobuild_init_config": {\n        "config_file_or_env": "OAI_CONFIG_LIST",\n        "builder_model": "gpt-4-1106-preview",\n        "agent_model": "gpt-4-1106-preview",\n    },\n    # this is used to configure the autobuild building process\n    "autobuild_build_config": {\n        "default_llm_config": {"temperature": 1, "top_p": 0.95},\n        "code_execution_config": {"timeout": 300, "work_dir": "groupchat", "last_n_messages": 1},\n        "coding": True,\n    },\n    "group_chat_config": {"max_round": 15},\n    "group_chat_llm_config": general_llm_config.copy(),\n    "max_turns": 3,\n}\n\n## build agents\ncaptain_agent = CaptainAgent(\n    name="captain_agent",\n    llm_config=general_llm_config,\n    nested_mode_config=nested_mode_config,\n)\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config={"use_docker": False},\n)\nquery = "Let\'s play game of 24. Given 4 numbers, you need to use +, -, *, / to get 24. The numbers are 2, 2, 7, 12."\nresult = user_proxy.initiate_chat(captain_agent, message=query)\n'})}),"\n",(0,i.jsx)(n.h1,{id:"using-captainagent-with-pre-specified-agenttool-libraries",children:"Using CaptainAgent with pre-specified agent/tool libraries"}),"\n",(0,i.jsxs)(n.p,{children:["To use CaptainAgent with pre-specified agent/tool libraries, we just need to specify the path to the agent library and tool library. The two libraries are independent, so you can choose to use one of the libraries or both.\nThe tool library we provide requires subscribing to specific APIs, please refer to the ",(0,i.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/topics/captainagent/tool_library",children:"docs"})," for details. The following example does not necessarily require tool usage, so it's fine if you are subscribing to them."]}),"\n",(0,i.jsxs)(n.p,{children:["To use agents from an agent library, you just need to specify a ",(0,i.jsx)(n.code,{children:"library_path"})," sub-field or a ",(0,i.jsx)(n.code,{children:"autobuild_tool_config"})," field in CaptainAgent's configuration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from autogen.agentchat.contrib.captain_agent import CaptainAgent\nfrom autogen import UserProxyAgent\n\ngeneral_llm_config = {\n    "temperature": 0,\n    "config_list": autogen.config_list_from_json("OAI_CONFIG_LIST", filter_dict={"model": ["gpt-4-1106-preview"]}),\n}\n\nnested_mode_config = {\n    "autobuild_init_config": {\n        "config_file_or_env": "OAI_CONFIG_LIST",\n        "builder_model": "gpt-4-1106-preview",\n        "agent_model": "gpt-4-1106-preview",\n    },\n    # this is used to configure the autobuild building process\n    "autobuild_build_config": {\n        "default_llm_config": {"temperature": 1, "top_p": 0.95},\n        "code_execution_config": {"timeout": 300, "work_dir": "groupchat", "last_n_messages": 1},\n        "coding": True,\n        "library_path": "captainagent_expert_library.json"\n    },\n    "autobuild_tool_config": {\n        "tool_root": "default",  # this will use the tool library we provide\n        "retriever": "all-mpnet-base-v2",\n    },\n    "group_chat_config": {"max_round": 10},\n    "group_chat_llm_config": general_llm_config.copy(),\n    "max_turns": 3\n}\n\n## build agents\ncaptain_agent = CaptainAgent(\n    name="captain_agent",\n    llm_config=general_llm_config,\n    nested_mode_config=nested_mode_config,\n)\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config={"use_docker": False},\n)\nquery = \'Find the stock price of Microsoft in the past 1 year and plot a line chart to show the trend. Save the line chart as "microsoft_stock_price.png".\'\nresult = user_proxy.initiate_chat(captain_agent, message=query)\n'})}),"\n",(0,i.jsx)(n.h1,{id:"further-reading",children:"Further Reading"}),"\n",(0,i.jsxs)(n.p,{children:["For a detailed description of how to configure the CaptainAgent, please refer to the ",(0,i.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/topics/captainagent",children:"document"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to our ",(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/2405.19425",children:"paper"})," for more details about CaptainAgent and the proposed new team-building paradigm: adaptive build."]}),"\n",(0,i.jsx)(n.p,{children:"If you find this blog useful, please consider citing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"@misc{song2024adaptiveinconversationteambuilding,\n      title={Adaptive In-conversation Team Building for Language Model Agents},\n      author={Linxin Song and Jiale Liu and Jieyu Zhang and Shaokun Zhang and Ao Luo and Shijian Wang and Qingyun Wu and Chi Wang},\n      year={2024},\n      eprint={2405.19425},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL},\n      url={https://arxiv.org/abs/2405.19425},\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},20450:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/build-f2396dc47860df9c25493bc91e1a366d.png"},63361:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/chat-df6e49e4d8643fb7f96fc80b68b5094b.png"},74612:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/overall-819167f387cfd04abc0936fc817079ac.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);