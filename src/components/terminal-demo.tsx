
import { useState } from "react";
import { Command } from "lucide-react";

const TerminalDemo = () => {
  // This could be expanded with actual interactive terminal functionality if needed
  return (
    <div className="max-w-6xl mx-auto bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800">
      {/* Mac OS header bar */}
      <div className="bg-gray-900 py-2 px-4 flex items-center">
        <div className="flex space-x-2 items-center">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="text-xs text-gray-400">alex — alex@alex-mbp</div>
        </div>
        <div className="w-28"></div> {/* Spacer to balance the header */}
      </div>
      
      {/* Terminal content */}
      <div className="p-6 font-mono text-sm text-gray-300 h-full overflow-hidden">
        <div className="flex flex-col space-y-1">
          <div className="flex">
            <span className="text-green-400">alex@alex-mbp</span>
            <span className="text-gray-400"> ~ $ </span>
            <span className="ml-1">ssh root@k8s.prod.autoco.int</span>
          </div>
          <div className="flex">
            <span className="text-gray-400">&gt; ssh root@k8s.prod.autoco.int</span>
          </div>
          <div className="flex">
            <span className="text-red-400">ssh: connection refused</span>
          </div>
          <div className="flex">
            <span className="text-green-400">alex@alex-mbp</span>
            <span className="text-gray-400"> ~ $ </span>
            <span className="ml-1">ssh root@k8s.prod.autoco.int</span>
          </div>
          <div className="flex">
            <span className="text-gray-300">Welcome to Kubernetes v1.21.1!</span>
          </div>
          <div className="mt-2 flex">
            <span className="text-gray-400">Type </span>
            <span className="text-yellow-300">"help"</span>
            <span className="text-gray-400"> for a list of commands.</span>
          </div>
          <div className="mt-1 flex">
            <span className="text-green-400">root@prod-cluster:</span>
            <span className="text-gray-400">~$</span>
            <span className="ml-1 animate-pulse">▌</span> {/* Blinking cursor */}
          </div>
        </div>
      </div>

      {/* Favorites sidebar */}
      <div className="absolute right-0 top-[40%] transform -translate-y-1/2 bg-gray-900 rounded-l-lg p-4 w-56 hidden md:block">
        <div className="mb-4">
          <div className="text-xs text-gray-400 uppercase mb-2">FAVORITES</div>
          <div className="space-y-3">
            <div className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <Command className="w-4 h-4" />
              </span>
              <span>STG Cluster</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <Command className="w-4 h-4" />
              </span>
              <span>Prod Cluster</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <Command className="w-4 h-4" />
              </span>
              <span>Elastic</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <Command className="w-4 h-4" />
              </span>
              <span>Gitlab</span>
            </div>
            <div className="flex items-center text-gray-300">
              <span className="w-5 h-5 flex items-center justify-center mr-2">
                <Command className="w-4 h-4" />
              </span>
              <span>Jira</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalDemo;
