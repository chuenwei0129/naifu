"use strict";(self.webpackChunknaifu=self.webpackChunknaifu||[]).push([[3518],{45721:function(s,e,n){n.r(e),n.d(e,{demos:function(){return a}});var u=n(67294),t=n(61526),a={}},98092:function(s,e,n){var u;n.r(e),n.d(e,{demos:function(){return l}});var t=n(15009),a=n.n(t),d=n(99289),m=n.n(d),r=n(67294),h=n(9508),l={"src-hooks-use-latest-demo-demo1":{component:r.memo(r.lazy(function(){return Promise.all([n.e(6333),n.e(2202),n.e(9640),n.e(5955),n.e(2433)]).then(n.bind(n,85701))})),asset:{type:"BLOCK",id:"src-hooks-use-latest-demo-demo1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(66384).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:u||(u=n.t(r,2))},renderOpts:{compile:function(){var f=m()(a()().mark(function c(){var _,E=arguments;return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(7335).then(n.bind(n,37335));case 2:return o.abrupt("return",(_=o.sent).default.apply(_,E));case 3:case"end":return o.stop()}},c)}));function i(){return f.apply(this,arguments)}return i}()}}}},41705:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});var u=n(61526);const t=[{value:"useFoo",paraId:0}]},47357:function(s,e,n){n.r(e),n.d(e,{texts:function(){return t}});var u=n(9508);const t=[{value:"useLatest",paraId:0}]},66384:function(s,e){e.Z=`import React, { useEffect, useRef, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  // \u6BCF\u6B21\u6E32\u67D3\u540E\u90FD\u4F1A\u91CD\u65B0\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528 useRef \u4FDD\u5B58\u6700\u65B0\u7684\u503C
  countRef.current = count;

  useEffect(() => {
    setInterval(() => {
      console.log('setInterval:', countRef.current);
    }, 1000);
  }, []);

  return (
    <div>
      count: {count}
      <br />
      <button type="button" onClick={() => setCount((val) => val + 1)}>
        \u589E\u52A0 1
      </button>
    </div>
  );
};
`}}]);
