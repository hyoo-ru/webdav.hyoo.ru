function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) ] }; 
;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Error.stackTraceLimit = Infinity;
module.exports;
//mol.js.map
;

$node[ "../mol/mol" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || global || self || this
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $
$.$mol = $  // deprecated

;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        if (!having)
            return false;
        if (typeof having !== 'object')
            return false;
        if (typeof having['destructor'] !== 'function')
            return false;
        return true;
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = (owner === null || owner === void 0 ? void 0 : owner.$) || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    _a = $.$mol_ambient_ref;
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', Object.assign({ 'vertical-align': '8%' }, style), ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//maybe.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log(path, ...values) {
        if ($.$mol_log_filter() == null)
            return;
        path = String(path);
        if (path.indexOf($.$mol_log_filter()) === -1)
            return;
        const context = $.$mol_log_context();
        if (context)
            context();
        console.debug(path, ...values);
        if ($.$mol_log_debug() == null)
            return;
        if (path.indexOf($.$mol_log_debug()) === -1)
            return;
        debugger;
    }
    $.$mol_log = $mol_log;
})($ || ($ = {}));
//log.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_group(name, task) {
        const filter = $.$mol_log_filter();
        if (filter == null)
            return task;
        return function $mol_log_group_wrapper(...args) {
            let started = false;
            let prev = $.$mol_log_context();
            $.$mol_log_context(() => {
                if (prev)
                    prev();
                started = true;
                if (filter || prev)
                    console.group(name);
                else
                    console.groupCollapsed(name);
                $.$mol_log_context(prev = null);
            });
            try {
                return task.apply(this, args);
            }
            finally {
                if (started)
                    console.groupEnd();
                $.$mol_log_context(prev);
            }
        };
    }
    $.$mol_log_group = $mol_log_group;
})($ || ($ = {}));
//log_group.js.map
;
"use strict";
var $;
(function ($) {
    let context = null;
    function $mol_log_context(next = context) {
        return context = next;
    }
    $.$mol_log_context = $mol_log_context;
})($ || ($ = {}));
//log_context.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log_debug(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_debug()');
            }
            else {
                sessionStorage.setItem('$mol_log_debug()', next);
            }
        }
        return sessionStorage.getItem('$mol_log_debug()');
    }
    $.$mol_log_debug = $mol_log_debug;
})($ || ($ = {}));
//log_debug.web.js.map
;
"use strict";
var $;
(function ($) {
    let filter = undefined;
    $.$mol_log_filter = function $mol_log_filter(next) {
        if (next !== undefined) {
            if (next == null) {
                sessionStorage.removeItem('$mol_log_filter()');
            }
            else {
                sessionStorage.setItem('$mol_log_filter()', next);
            }
            filter = next;
        }
        if (filter !== undefined)
            return filter;
        return filter = sessionStorage.getItem('$mol_log_filter()');
    };
    if (typeof sessionStorage === 'undefined')
        $.$mol_log_filter = (next = null) => filter = next;
    if ($.$mol_log_filter() == null)
        console.info('Use $mol_log_filter( needle : string|null ) to toggle logs');
})($ || ($ = {}));
//log_filter.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_log2 extends $.$mol_wrapper {
        constructor(host, id, args) {
            super();
            this.host = host;
            this.id = id;
            this.args = args;
            this.stream = [];
            this[Symbol.toStringTag] = host ? `${host}.${id}` : id;
        }
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                const outer = $mol_log2.current;
                const inner = $mol_log2.current = new Inner(this, task.name, args);
                try {
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.current = outer;
                    inner.flush();
                }
            };
            return wrapped;
        }
        flush() {
            if (this.stream.length === 0)
                return;
            console.debug(this);
        }
        info(...values) {
            this.stream.push(new $mol_log2_line(...$mol_log2.prefix, ...values));
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, ...$.$mol_maybe(this.host).map($.$mol_dev_format_auto), '.', $.$mol_dev_format_strong(this.id), '(', ...this.args.map($.$mol_dev_format_auto), ') ', $.$mol_dev_format_auto(this.stream));
        }
        static info(...values) {
            const excludes = $mol_log2.excludes;
            if (!excludes)
                return;
            const skip = excludes.some((regexp, index) => {
                return regexp && regexp.test(String(values[index])) || false;
            });
            if (skip)
                return;
            if (!$mol_log2.current) {
                console.warn(new Error(`$mol_log.current is not defined. Wrap entry point to $mol_log!`));
                $mol_log2.current = new $mol_log2(null, '$mol_log2_default', []);
                console.debug($mol_log2.current);
            }
            $mol_log2.current.info(...values);
        }
    }
    $mol_log2.current = null;
    $mol_log2.excludes = null;
    $mol_log2.prefix = [];
    $.$mol_log2 = $mol_log2;
    class $mol_log2_indent extends $.$mol_wrapper {
        static wrap(task) {
            const Inner = this;
            const wrapped = function (...args) {
                try {
                    $mol_log2.prefix.push($.$mol_log2_token_indent);
                    return task.call(this, ...args);
                }
                finally {
                    $mol_log2.prefix.pop();
                }
            };
            return wrapped;
        }
    }
    $.$mol_log2_indent = $mol_log2_indent;
    class $mol_log2_table extends $mol_log2 {
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_strong(`${this}(`), ...this.args.map($.$mol_dev_format_auto), $.$mol_dev_format_strong(`) `));
        }
        [$.$mol_dev_format_body]() {
            return $.$mol_dev_format_table({}, ...this.stream.map($.$mol_dev_format_auto));
        }
    }
    $.$mol_log2_table = $mol_log2_table;
    class $mol_log2_hidden extends $mol_log2 {
        flush() { }
    }
    $.$mol_log2_hidden = $mol_log2_hidden;
    class $mol_log2_line extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_tr({}, ...this.map(item => $.$mol_dev_format_td({}, $.$mol_dev_format_auto(item))));
        }
    }
    $.$mol_log2_line = $mol_log2_line;
    class $mol_log2_token extends Array {
        constructor(...items) {
            super(...items);
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_accent(...this);
        }
    }
    $.$mol_log2_token = $mol_log2_token;
    $.$mol_log2_token_empty = new $mol_log2_token('');
    $.$mol_log2_token_indent = new $mol_log2_token('\t');
    $.$mol_log2_legend = new $mol_log2_table(null, '$mol_log2_legend', []);
    if (!$mol_log2.excludes)
        $.$mol_log2_legend.info($.$mol_log2_token_empty, 'Use `$mol_log2.excludes : null | RegExp[]` to toggle logs');
})($ || ($ = {}));
//log2.js.map
;
"use strict";
var $;
(function ($) {
    console.debug($.$mol_log2_legend);
})($ || ($ = {}));
//log2.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        console.warn('$mol_fiber_func is deprecated. Use $mol_fiber.func instead.');
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        console.warn('$mol_fiber_method is deprecated. Use $mol_fiber.method instead.');
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then($.$mol_log2.func(master.push).bind(master), $.$mol_log2.func(master.fail).bind(master));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.value = undefined;
            this.error = null;
            this.cursor = 0;
            this.masters = [];
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_tick(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error || !Object.is(this.value, value)) {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_changed1, value, $.$mol_fiber_token_changed2, this.error || this.value);
                this.obsolete_slaves();
                this.forget();
            }
            else {
                this.$.$mol_log2.info(this, $.$mol_fiber_token_actualized, value);
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            this.$.$mol_log2.info(this, $.$mol_fiber_token_failed, error);
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_sleeped, promise);
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.$.$mol_log2.info(this, $.$mol_fiber_token_runned);
                this.pull();
            }
            catch (error) {
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    __decorate([
        $.$mol_log2.method
    ], $mol_fiber.prototype, "wake", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_fiber.prototype, "update", null);
    $.$mol_fiber = $mol_fiber;
    $.$mol_fiber_token_runned = new $.$mol_log2_token(' ► ');
    $.$mol_fiber_token_changed1 = new $.$mol_log2_token(' ˸ ');
    $.$mol_fiber_token_changed2 = new $.$mol_log2_token(' 🠈 ');
    $.$mol_fiber_token_actualized = new $.$mol_log2_token(' ✓ ');
    $.$mol_fiber_token_sleeped = new $.$mol_log2_token(' 💤 ');
    $.$mol_fiber_token_failed = new $.$mol_log2_token(' 🔥 ');
    $.$mol_fiber_token_destructed = new $.$mol_log2_token(' 🕱 ');
    $.$mol_log2_legend.info($.$mol_fiber_token_runned, '$mol_fiber starts execution');
    $.$mol_log2_legend.info(new $.$mol_log2_line($.$mol_fiber_token_changed1, $.$mol_fiber_token_changed2), '$mol_fiber value is changed to different value');
    $.$mol_log2_legend.info($.$mol_fiber_token_actualized, 'Actual $mol_fiber value is same as before');
    $.$mol_log2_legend.info($.$mol_fiber_token_sleeped, '$mol_fiber can not run now and awaits on promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_failed, '$mol_fiber is failed and will be throw an Error or Promise');
    $.$mol_log2_legend.info($.$mol_fiber_token_destructed, '$mol_fiber fully destructed');
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $node = $node || {};
//node.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
            this._value = undefined;
            this._error = null;
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        get() {
            if ($mol_atom2.cached)
                return this.value;
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidation);
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                this.$.$mol_log2.info(this, $.$mol_atom2_token_stumbled, this._error || this._value);
                return super.pull();
            }
            this.$.$mol_log2.info(this, $.$mol_atom2_token_revalidated, this._error || this._value);
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            this.$.$mol_log2.info(this, $.$mol_atom2_token_leaded, slave);
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_disleaded, this.slaves[slave_index]);
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_obsoleted, this._error || this._value);
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            this.$.$mol_log2.info(this, $.$mol_atom2_token_doubted, this._error || this._value);
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return $.$mol_log2_hidden.func(() => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            });
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            this.$.$mol_log2.info(this, $.$mol_fiber_token_destructed);
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.cached = false;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "obsolete_slaves", null);
    __decorate([
        $.$mol_log2_indent.method
    ], $mol_atom2.prototype, "doubt_slaves", null);
    $.$mol_atom2 = $mol_atom2;
    $.$mol_atom2_token_revalidation = new $.$mol_log2_token(' ⏭ ');
    $.$mol_atom2_token_stumbled = new $.$mol_log2_token(' ⏯ ');
    $.$mol_atom2_token_revalidated = new $.$mol_log2_token(' ✔ ');
    $.$mol_atom2_token_leaded = new $.$mol_log2_token(' ☍ ');
    $.$mol_atom2_token_disleaded = new $.$mol_log2_token(' ☌ ');
    $.$mol_atom2_token_obsoleted = new $.$mol_log2_token(' ✘ ');
    $.$mol_atom2_token_doubted = new $.$mol_log2_token(' � ');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidation, '$mol_atom2 starts masters cheking for changes');
    $.$mol_log2_legend.info($.$mol_atom2_token_stumbled, '$mol_atom2 is obsoleted while masters checking');
    $.$mol_log2_legend.info($.$mol_atom2_token_revalidated, '$mol_atom2 is actual becasue there is no changed masters');
    $.$mol_log2_legend.info($.$mol_atom2_token_leaded, '$mol_atom2 leads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_disleaded, '$mol_atom2 disleads some slave');
    $.$mol_log2_legend.info($.$mol_atom2_token_obsoleted, '$mol_atom2 is obsoleted because some master is changed');
    $.$mol_log2_legend.info($.$mol_atom2_token_doubted, '$mol_atom2 is doubted because some master is doubted or obsoleted');
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = value.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        return Object.assign(Object.assign({}, descr || {}), { value(next, force) {
                if (next === undefined) {
                    const cache = get_cache(this);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete(Number.NaN);
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, next);
                    return get_cache(this).put(next);
                });
            } });
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return value;
        if (typeof value !== 'object')
            return value;
        if (Array.isArray(value))
            return value.join(' , ');
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            let cache = dict.get(key);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${JSON.stringify(key)})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    console.warn('$mol_http is deprecated. Use $mol_fetch instead.');
    class $mol_http extends $.$mol_object {
        static resource(uri) {
            const resolver = $.$mol_dom_context.document.createElement('a');
            resolver.href = uri;
            return this.resource_absolute(resolver.href);
        }
        static resource_absolute(uri) {
            return $mol_http.make({
                uri: $.$mol_const(uri)
            });
        }
        uri() { return ''; }
        method_get() { return 'Get'; }
        method_put() { return 'Put'; }
        credentials() {
            return null;
        }
        headers() {
            return {};
        }
        response_type() {
            return '';
        }
        response(next, force) {
            const creds = this.credentials();
            const method = (next === void 0) ? this.method_get() : this.method_put();
            const uri = this.uri();
            const headers = this.headers();
            return $.$mol_fetch.response(uri, {
                credentials: creds ? 'include' : undefined,
                method,
                headers,
                body: next
            });
        }
        text(next, force) {
            return this.response(next, force).text();
        }
        xml(next, force) {
            return this.response(next, force).xml();
        }
        json(next, force) {
            const next2 = next && JSON.stringify(next, null, '\t');
            return this.response(next2, force).json();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_http.prototype, "json", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_http, "resource_absolute", null);
    $.$mol_http = $mol_http;
})($ || ($ = {}));
//http.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            descr.value = function $mol_deprecated_wrapper(...args) {
                console.warn(`${host.constructor.name}::${field} is deprecated. ${message}`);
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_http_resource extends $.$mol_http {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource, "item", null);
    $.$mol_http_resource = $mol_http_resource;
    class $mol_http_resource_json {
        static item(uri) {
            return $.$mol_http.resource(uri);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_http.resource insted.')
    ], $mol_http_resource_json, "item", null);
    $.$mol_http_resource_json = $mol_http_resource_json;
})($ || ($ = {}));
//resource.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_merge_dict(target, source) {
        let result = {};
        for (let key in target)
            result[key] = target[key];
        for (let key in source)
            result[key] = source[key];
        return result;
    }
    $.$mol_merge_dict = $mol_merge_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next, force) {
            if (next === undefined)
                return $.$mol_dom_context.location.href;
            history.replaceState(history.state, $.$mol_dom_context.document.title, next);
            return next;
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#/)[1] || '';
            var chunks = href.split(/[\/\?#&;]/g);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : $.$mol_merge_dict(this.dict(), { [key]: next });
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link($.$mol_merge_dict(this.dict_cut(Object.keys(next)), next));
        }
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + chunks.join('/'), $.$mol_dom_context.location.href).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
    self.addEventListener('hashchange', $.$mol_fiber_root($.$mol_log_group('$mol_state_arg hashchange', (event) => {
        $mol_state_arg.href($.$mol_dom_context.location.href);
    })));
})($ || ($ = {}));
//arg.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_webdav extends $.$mol_http {
        static item(uri) {
            return this.make({
                uri: $.$mol_const(uri),
            });
        }
        data_tree() {
            const dom = this.response().xml();
            const responses = dom.querySelectorAll('response');
            const data = {};
            for (let response of responses) {
                const uri = this.resolve(response.querySelector('href').textContent).uri();
                data[uri] = response;
            }
            return data;
        }
        data_self() {
            return this.parent().data_tree();
        }
        parent() {
            return $mol_webdav.item(this.uri().replace(/\/[^\/]*\/?$/, '/'));
        }
        sub() {
            const next = [];
            for (let uri of Object.keys(this.data_tree())) {
                if (uri == this.uri())
                    continue;
                next.push($mol_webdav.item(uri));
            }
            return next;
        }
        depth() {
            return 1;
        }
        headers() {
            return {
                'Depth': String(this.depth())
            };
        }
        method_get() {
            return 'PROPFIND';
        }
        resolve(uri) {
            if (!uri)
                return this;
            if (/^[-\w]+:/.test(uri)) {
                return $mol_webdav.item(uri);
            }
            if (uri[0] === '/') {
                return $mol_webdav.item(this.uri().replace(/^([^\/]+\/\/[^\/]+).*/, '$1') + uri);
            }
            let res = this.uri() + '/' + uri;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            while (true) {
                let prev = res;
                res = res.replace(/\/\.\.\/[^\/]+\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.item(res);
        }
        prop(prop) {
            return this.data_self()[this.uri()].querySelector(prop).textContent;
        }
        type() {
            return this.data_self()[this.uri()].querySelector('collection') ? 'dir' : 'file';
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_webdav.prototype, "data_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_webdav.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_webdav, "item", null);
    $.$mol_webdav = $mol_webdav;
})($ || ($ = {}));
//webdav.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n@media (prefers-color-scheme: light) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t\t--mol_theme_field: white;\n\t}\n}\n\n@media (prefers-color-scheme: dark) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t\t--mol_theme_hover: #333;\n\t\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t\t--mol_theme_field: black;\n\t}\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t--mol_theme_field: white;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: #333;\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t--mol_theme_field: black;\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: rgb(204, 68, 50);\n\t--mol_theme_hover: rgb(165, 56, 42);\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 1rem/1.5 \"-apple-system\", BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n\t--mol_skin_font_monospace: Monaco, monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', $.$mol_fiber_root($.$mol_log_group(`$mol_window resize`, () => {
        $mol_window.size(undefined, $.$mol_mem_force_cache);
    })));
})($ || ($ = {}));
//window.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer($.$mol_log2.func(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            }));
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "focus", null);
    __decorate([
        $.$mol_log2.method
    ], $mol_view_selection, "blur", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            new $.$mol_after_tick($.$mol_fiber_root(() => $.$mol_view_selection.focus(event)));
        }, true);
        $.$mol_dom_context.document.documentElement.addEventListener('blur', (event) => {
            new $.$mol_after_timeout(0, $.$mol_fiber_root(() => $.$mol_view_selection.blur(event)));
        }, true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const cur = style[name];
            if (typeof val === 'number') {
                if (parseFloat(cur) == val)
                    continue;
                style[name] = `${val}px`;
            }
            if (cur !== val)
                style[name] = val;
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if ((name === null || name === void 0 ? void 0 : name.length) > 1)
            return name;
        for (let key in $) {
            try {
                if ($[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch (_a) { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.id = requestAnimationFrame(task);
        }
        destructor() {
            cancelAnimationFrame(this.id);
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub()) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                for (let plugin of this.plugins()) {
                    if (plugin instanceof $.$mol_plugin) {
                        plugin.render();
                    }
                }
                this.render();
            }
            catch (error) {
                const need_catch = $.$mol_fail_catch(error);
                if (need_catch) {
                    $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                }
                if (error instanceof Promise)
                    $.$mol_fail_hidden(error);
                if (need_catch) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view) ? child.dom_node_actual() : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push($.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = $.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_mem
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: background-color, height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgba(255,220,220,1),\n\t\trgba(255,220,220,1) 11px,\n\t\trgba(255,255,220,1) 10px,\n\t\trgba(255,255,220,1) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .1 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        $.$mol_dom_context.document.addEventListener(event_name, $.$mol_fiber_root($.$mol_log2.func((event) => {
            $.$mol_view.autobind();
            $.$mol_defer.run();
        })));
        function $mol_view_watch() {
            $.$mol_fiber_unlimit(() => {
                for (const view of $.$mol_view.watchers) {
                    view.view_rect_cache(view.dom_node().getBoundingClientRect().toJSON());
                }
                new $.$mol_after_frame($mol_view_watch);
            });
        }
        $mol_view_watch();
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_log2.func($.$mol_fiber_root(events[event_name])), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_meter extends $.$mol_plugin {
        zoom() {
            return 1;
        }
        width(val, force) {
            return (val !== void 0) ? val : 0;
        }
        height(val, force) {
            return (val !== void 0) ? val : 0;
        }
        left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        right(val, force) {
            return (val !== void 0) ? val : 0;
        }
        bottom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        top(val, force) {
            return (val !== void 0) ? val : 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "width", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "height", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "left", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "right", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_meter.prototype, "top", null);
    $.$mol_meter = $mol_meter;
})($ || ($ = {}));
//meter.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_meter extends $.$mol_meter {
            rect() {
                const node = this.dom_node();
                const win = this.$.$mol_dom_context;
                if (node !== $.$mol_dom_context.document.body) {
                    new $.$mol_after_frame($.$mol_atom2.current.fresh);
                    try {
                        const { left, top, right, bottom, width, height } = node.getBoundingClientRect();
                        return { left, top, right, bottom, width, height, zoom: win.devicePixelRatio || 1 };
                    }
                    catch (error) {
                    }
                }
                const size = $.$mol_window.size();
                return {
                    zoom: win.devicePixelRatio || 1,
                    left: 0,
                    top: 0,
                    right: size.width,
                    bottom: size.height,
                    width: size.width,
                    height: size.height,
                };
            }
            top() {
                return this.rect().top;
            }
            bottom() {
                return this.rect().bottom;
            }
            left() {
                return this.rect().left;
            }
            right() {
                return this.rect().right;
            }
            width() {
                return this.rect().width;
            }
            height() {
                return this.rect().height;
            }
            zoom() {
                return this.rect().zoom;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "rect", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "top", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "bottom", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "left", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "right", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "width", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "height", null);
        __decorate([
            $.$mol_mem
        ], $mol_meter.prototype, "zoom", null);
        $$.$mol_meter = $mol_meter;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//meter.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_touch extends $.$mol_plugin {
        start_zoom(val, force) {
            return (val !== void 0) ? val : 0;
        }
        start_distance(val, force) {
            return (val !== void 0) ? val : 0;
        }
        zoom(val, force) {
            return (val !== void 0) ? val : 1;
        }
        start_pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        pan(val, force) {
            return (val !== void 0) ? val : [0, 0];
        }
        pos(val, force) {
            return (val !== void 0) ? val : [NaN, NaN];
        }
        start_pos(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_precision() {
            return 16;
        }
        swipe_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_from_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_right(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_bottom(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_left(val, force) {
            return (val !== void 0) ? val : null;
        }
        swipe_to_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "touch-action": "none" }));
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "touchstart": (event) => this.event_start(event), "touchmove": (event) => this.event_move(event), "touchend": (event) => this.event_end(event), "mousedown": (event) => this.event_start(event), "mousemove": (event) => this.event_move(event), "mouseup": (event) => this.event_end(event), "mouseleave": (event) => this.event_leave(event), "wheel": (event) => this.event_wheel(event) }));
        }
        event_start(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_move(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_end(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_leave(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_wheel(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_distance", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "zoom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pan", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "start_pos", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_from_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_right", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_bottom", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "swipe_to_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_start", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_move", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_end", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_leave", null);
    __decorate([
        $.$mol_mem
    ], $mol_touch.prototype, "event_wheel", null);
    $.$mol_touch = $mol_touch;
})($ || ($ = {}));
//touch.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_touch extends $.$mol_touch {
            rect() {
                return this.dom_node().getBoundingClientRect();
            }
            event_start(event) {
                if (event.defaultPrevented)
                    return;
                this.start_pan(this.pan());
                let pos;
                if (event instanceof MouseEvent) {
                    if (event.buttons === 1) {
                        pos = [event.pageX, event.pageY];
                        this.start_pos(pos);
                    }
                }
                else if (event instanceof TouchEvent) {
                    if (event.touches.length === 1) {
                        pos = [event.touches[0].pageX, event.touches[0].pageY];
                        this.start_pos(pos);
                    }
                    if (event.touches.length === 2) {
                        const distance = ((event.touches[1].pageX - event.touches[0].pageX) ** 2 + (event.touches[1].pageY - event.touches[0].pageY) ** 2) ** .5;
                        this.start_distance(distance);
                        this.start_zoom(this.zoom());
                    }
                }
            }
            event_leave(event) {
                if (event.defaultPrevented)
                    return;
                if (event instanceof MouseEvent)
                    this.pos(super.pos());
            }
            event_move(event) {
                if (event.defaultPrevented)
                    return;
                const start_pan = this.start_pan();
                let pos;
                let cursor_pos;
                if (event instanceof MouseEvent) {
                    cursor_pos = [event.pageX, event.pageY];
                    if (event.buttons === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                else if (event instanceof TouchEvent) {
                    cursor_pos = [event.touches[0].pageX, event.touches[0].pageY];
                    if (event.touches.length === 1)
                        pos = cursor_pos;
                    else
                        this.start_pos(null);
                }
                if (cursor_pos) {
                    const { left, top } = this.rect();
                    this.pos([
                        Math.max(0, Math.round(cursor_pos[0] - left)),
                        Math.max(0, Math.round(cursor_pos[1] - top)),
                    ]);
                }
                if (pos) {
                    const start_pos = this.start_pos();
                    if (!start_pos)
                        return;
                    if (this.pan !== $mol_touch.prototype.pan) {
                        this.pan([start_pan[0] + pos[0] - start_pos[0], start_pan[1] + pos[1] - start_pos[1]]);
                        event.preventDefault();
                    }
                    if (typeof TouchEvent === 'undefined')
                        return;
                    if (!(event instanceof TouchEvent))
                        return;
                    const precision = this.swipe_precision();
                    if ((this.swipe_right !== $mol_touch.prototype.swipe_right
                        || this.swipe_from_left !== $mol_touch.prototype.swipe_from_left
                        || this.swipe_to_right !== $mol_touch.prototype.swipe_to_right)
                        && pos[0] - start_pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_right(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_left !== $mol_touch.prototype.swipe_left
                        || this.swipe_from_right !== $mol_touch.prototype.swipe_from_right
                        || this.swipe_to_left !== $mol_touch.prototype.swipe_to_left)
                        && start_pos[0] - pos[0] > precision * 2
                        && Math.abs(pos[1] - start_pos[1]) < precision) {
                        this.swipe_left(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_bottom !== $mol_touch.prototype.swipe_bottom
                        || this.swipe_from_top !== $mol_touch.prototype.swipe_from_top
                        || this.swipe_to_bottom !== $mol_touch.prototype.swipe_to_bottom)
                        && pos[1] - start_pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_bottom(event);
                        event.preventDefault();
                    }
                    if ((this.swipe_top !== $mol_touch.prototype.swipe_top
                        || this.swipe_from_bottom !== $mol_touch.prototype.swipe_from_bottom
                        || this.swipe_to_top !== $mol_touch.prototype.swipe_to_top)
                        && start_pos[1] - pos[1] > precision * 2
                        && Math.abs(pos[0] - start_pos[0]) < precision) {
                        this.swipe_top(event);
                        event.preventDefault();
                    }
                }
                if (typeof TouchEvent === 'undefined')
                    return;
                if (!(event instanceof TouchEvent))
                    return;
                if (event.touches.length === 2) {
                    if (this.zoom === $mol_touch.prototype.zoom)
                        return;
                    const pos0 = [event.touches[0].pageX, event.touches[0].pageY];
                    const pos1 = [event.touches[1].pageX, event.touches[1].pageY];
                    const distance = ((pos1[0] - pos0[0]) ** 2 + (pos1[1] - pos0[1]) ** 2) ** .5;
                    const center = [pos1[0] / 2 + pos0[0] / 2, pos1[1] / 2 + pos0[1] / 2];
                    const start_zoom = this.start_zoom();
                    const mult = distance / this.start_distance();
                    this.zoom(start_zoom * mult);
                    const pan = [(start_pan[0] - center[0]) * mult + center[0], (start_pan[1] - center[1]) * mult + center[1]];
                    this.pan(pan);
                    event.preventDefault();
                }
            }
            swipe_left(event) {
                if (this.rect().right - this.start_pos()[0] < this.swipe_precision() * 2)
                    this.swipe_from_right(event);
                else
                    this.swipe_to_left(event);
                this.event_end(event);
            }
            swipe_right(event) {
                if (this.start_pos()[0] - this.rect().left < this.swipe_precision() * 2)
                    this.swipe_from_left(event);
                else
                    this.swipe_to_right(event);
                this.event_end(event);
            }
            swipe_top(event) {
                if (this.rect().bottom - this.start_pos()[1] < this.swipe_precision() * 2)
                    this.swipe_from_bottom(event);
                else
                    this.swipe_to_top(event);
                this.event_end(event);
            }
            swipe_bottom(event) {
                if (this.start_pos()[1] - this.rect().top < this.swipe_precision() * 2)
                    this.swipe_from_top(event);
                else
                    this.swipe_to_bottom(event);
                this.event_end(event);
            }
            event_end(event) {
                this.start_pos(null);
            }
            event_wheel(event) {
                if (this.pan === $mol_touch.prototype.pan && this.zoom === $mol_touch.prototype.zoom)
                    return;
                if (this.pan !== $mol_touch.prototype.pan) {
                    event.preventDefault();
                }
                const zoom_prev = this.zoom() || 0.001;
                const zoom_next = zoom_prev * (1 - .1 * Math.sign(event.deltaY));
                const mult = zoom_next / zoom_prev;
                this.zoom(zoom_next);
                const pan_prev = this.pan();
                const center = [event.offsetX, event.offsetY];
                const pan_next = [(pan_prev[0] - center[0]) * mult + center[0], (pan_prev[1] - center[1]) * mult + center[1]];
                this.pan(pan_next);
            }
        }
        $$.$mol_touch = $mol_touch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//touch.view.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: false });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
    function $mol_dom_render_events_async(el, events) {
        for (let name in events) {
            el.addEventListener(name, $.$mol_log_group(el.id + ' ' + name, events[name]), { passive: true });
        }
    }
    $.$mol_dom_render_events_async = $mol_dom_render_events_async;
})($ || ($ = {}));
//events.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $.$mol_view {
        Sub() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//ghost.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node() {
                const node = this.Sub().dom_node();
                $.$mol_dom_render_attributes(node, this.attr_static());
                $.$mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $.$mol_dom_render_attributes(node, attr);
                $.$mol_dom_render_styles(node, style);
                $.$mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                this.dom_node_actual();
                return node;
            }
            title() {
                return this.Sub().title();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $.$mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//ghost.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_book extends $.$mol_view {
        sub() {
            return this.pages_wrapped();
        }
        pages_wrapped() {
            return [];
        }
        minimal_width() {
            return 0;
        }
        pages() {
            return [];
        }
        plugins() {
            return [this.Meter(), this.Touch()];
        }
        width() {
            return this.Meter().width();
        }
        Meter() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_meter());
        }
        Touch() {
            return ((obj) => {
                obj.swipe_from_left = (val) => this.event_front_up(val);
                obj.swipe_to_left = (val) => this.event_front_down(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        event_front_up(val, force) {
            return (val !== void 0) ? val : null;
        }
        event_front_down(val, force) {
            return (val !== void 0) ? val : null;
        }
        Page(index) {
            return ((obj) => {
                obj.Sub = () => this.page(index);
                obj.visible = () => this.page_visible(index);
                return obj;
            })(new this.$.$mol_book_page());
        }
        page(index) {
            return null;
        }
        page_visible(index) {
            return true;
        }
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Meter", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_up", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "event_front_down", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_book.prototype, "Page", null);
    __decorate([
        $.$mol_mem
    ], $mol_book.prototype, "Placeholder", null);
    $.$mol_book = $mol_book;
})($ || ($ = {}));
(function ($) {
    class $mol_book_placeholder extends $.$mol_view {
        minimal_width() {
            return 400;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "tabindex": null }));
        }
    }
    $.$mol_book_placeholder = $mol_book_placeholder;
})($ || ($ = {}));
(function ($) {
    class $mol_book_page extends $.$mol_ghost {
        attr_static() {
            return (Object.assign(Object.assign({}, super.attr_static()), { "tabindex": 0, "mol_book_page_visible": true }));
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_book_page_focused": this.focused(), "mol_book_page_visible": this.visible() }));
        }
        visible() {
            return true;
        }
    }
    $.$mol_book_page = $mol_book_page;
})($ || ($ = {}));
//book.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book extends $.$mol_book {
            pages_extended() {
                return [this.Placeholder(), ...this.pages()];
            }
            break_point() {
                const pages = this.pages_extended();
                const limit = this.width();
                let width = 0;
                for (var break_point = pages.length; break_point > 0; --break_point) {
                    const page = pages[break_point - 1];
                    if (!page)
                        continue;
                    const page_width = page.minimal_width();
                    if (width + page_width > limit)
                        break;
                    width += page_width;
                }
                if (width === 0)
                    --break_point;
                return break_point;
            }
            page(index) {
                return this.pages_extended()[index];
            }
            page_visible(index) {
                return index >= this.break_point();
            }
            pages_wrapped() {
                const pages = this.pages_extended();
                const extended = [];
                for (let i = 1; i < pages.length; ++i) {
                    if (pages[i])
                        extended.push(this.Page(i));
                }
                if (pages[0])
                    extended.push(this.Page(0));
                return extended;
            }
            title() {
                return this.pages().map(page => page.title()).reverse().join(' | ');
            }
            event_front_up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(true);
            }
            event_front_down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                this.page(1).focused(false);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_extended", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "break_point", null);
        __decorate([
            $.$mol_mem
        ], $mol_book.prototype, "pages_wrapped", null);
        $$.$mol_book = $mol_book;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//book.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/book/book.view.css", "[mol_book] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tjustify-content: flex-start;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\ttransform: translateZ( 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]) {\n\tposition: absolute; \n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_book] > [mol_book_page_focused]:not([mol_book_page_visible]) ~ * {\n\topacity: .2;\n\tpointer-events: none;\n\tz-index: -1;\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) {\n\ttransform: translate3d( -100% , 0 , 0 );\n}\n\n[mol_book] > *:not([mol_book_page_visible]):not([mol_book_page_focused]) + *:before {\n\tcontent : '•••';\n\tposition: absolute;\n\ttop: 1rem;\n\tleft: 0;\n\tz-index: 1;\n\tpointer-events: none;\n\tcolor: var(--mol_skin_base_text);\n\ttransform: rotate(90deg);\n}\n\n[mol_book] > * {\n\tposition: relative;\n\t/* animation: mol_book_page_show linear .2s; */\n\ttransition-timing-function: linear;\n\tz-index: 0;\n\tmin-height: 100%;\n\tmax-height: 100%;\n}\n\n[mol_book_placeholder] {\n\tflex: 1000 1 400px;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tbackground: var(--mol_theme_field);\n\tz-index: -1;\n}\n\n[mol_book_placeholder]:hover {\n\toutline: none;\n}\n\n/*\n@keyframes mol_book_page_show {\n\tfrom {\n\t\ttransform: translateX( 100% );\n\t\topacity: 0;\n\t\tz-index: -1;\n\t}\n}\n\n[mol_book_page]:not(:first-child) {\n\tanimation: mol_book_page_show .25s ease-out;\n}\n*/\n");
})($ || ($ = {}));
//book.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        if (!event.key)
            return;
        $.$mol_state_local.value(event.key, undefined, $.$mol_mem_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextDecoder = (_a = globalThis.TextDecoder) !== null && _a !== void 0 ? _a : $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextEncoder = (_a = globalThis.TextEncoder) !== null && _a !== void 0 ? _a : $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        exists(next) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    exists = false;
                else
                    return $.$mol_fail_hidden(error);
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            return $.$mol_charset_decode(this.buffer(next === undefined ? undefined : $.$mol_charset_encode(next), force));
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        buffer(next, force) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $.$mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $.$mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        watcher() {
            throw new Error('$mol_file_web.watcher() not implemented');
        }
        stat(next, force) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure(next) {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    $mol_file_web.base = $.$mol_dom_context.document
        ? new URL('.', $.$mol_dom_context.document.currentScript['src']).toString()
        : '';
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//file.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
//result.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_func extends $.$mol_decor {
        constructor(value, name) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func(value, 'calc');
        }
        static fit_content(value) {
            return new $mol_style_func(value, 'fit-content');
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const make_class = (prefix, suffix, config) => {
            const props = [];
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const name = key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
                    const val = config[key];
                    if (Array.isArray(val)) {
                        props.push(`\t${name}: ${val.join(' ')};\n`);
                    }
                    else if (val.constructor === Object) {
                        for (let suffix in val) {
                            props.push(`\t${name}-${suffix}: ${val[suffix]};\n`);
                        }
                    }
                    else {
                        props.push(`\t${name}: ${val};\n`);
                    }
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix + '_' + key.toLowerCase(), suffix, config[key]);
                }
                else if (key[0] === '$') {
                    make_class(prefix + '] [' + $.$mol_dom_qname(key), suffix, config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(prefix + '] > [' + $.$mol_dom_qname(type), suffix, types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(prefix, suffix + '[' + name + '=' + JSON.stringify(val) + ']', attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, suffix, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(prefix, suffix + key, config[key]);
                }
            }
            if (props.length) {
                rules.push(`${prefix}${suffix} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('[' + $.$mol_dom_qname(Component.name), ']', config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "href": this.uri(), "title": this.hint(), "target": this.target(), "download": this.file_name(), "mol_link_current": this.current() }));
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        sub() {
            return [this.title()];
        }
        arg() {
            return ({});
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.click(event) }));
        }
        click(event, force) {
            return this.event_click(event);
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                if (this.uri() === this.$.$mol_state_arg.href())
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height() || 40);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    const { rem } = $.$mol_style_unit;
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: "var(--mol_theme_control)",
        stroke: 'currentColor',
        cursor: 'pointer',
        padding: rem(.5),
        boxSizing: 'border-box',
        position: 'relative',
        ':hover': {
            backgroundColor: "var(--mol_theme_hover)",
        },
        ':focus': {
            outline: 'none',
            backgroundColor: "var(--mol_theme_hover)",
        },
        '@': {
            mol_link_current: {
                'true': {
                    backgroundColor: "var(--mol_theme_current)",
                    color: "var(--mol_theme_text)",
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $.$mol_object {
        static now(precision = 0, next) {
            if (precision > 0) {
                new $.$mol_after_timeout(precision, $.$mol_atom2.current.fresh);
            }
            else {
                new $.$mol_after_frame($.$mol_atom2.current.fresh);
            }
            return Date.now();
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//time.js.map
;
"use strict";
var $;
(function ($) {
    let canvas;
    function $mol_font_canvas(next = canvas) {
        if (!next)
            next = $.$mol_dom_context.document.createElement('canvas').getContext('2d');
        return canvas = next;
    }
    $.$mol_font_canvas = $mol_font_canvas;
})($ || ($ = {}));
//canvas.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_font_measure(size, face, text) {
        const canvas = $.$mol_font_canvas();
        canvas.font = size + 'px ' + face;
        return canvas.measureText(text).width;
    }
    $.$mol_font_measure = $mol_font_measure;
})($ || ($ = {}));
//measure.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $.$mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        text_width(text, force) {
            return (text !== void 0) ? text : 0;
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_svg.prototype, "text_width", null);
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//svg.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $.$mol_state_time.now();
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
            text_width(text) {
                return $.$mol_font_measure(this.font_size(), this.font_family(), text);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $.$mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//svg.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $.$mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "viewBox": this.view_box(), "preserveAspectRatio": this.aspect() }));
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//root.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//root.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $.$mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "d": this.geometry() }));
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//path.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1em;\n\tflex: 0 0 auto;\n\tvertical-align: -.1em;\n\twill-change: transform;\n}\n");
})($ || ($ = {}));
//icon.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $.$mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [this.Path()];
        }
        Path() {
            return ((obj) => {
                obj.geometry = () => this.path();
                return obj;
            })(new this.$.$mol_svg_path());
        }
        path() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//icon.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_folder extends $.$mol_icon {
        path() {
            return "M10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z";
        }
    }
    $.$mol_icon_folder = $mol_icon_folder;
})($ || ($ = {}));
//folder.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_file extends $.$mol_icon {
        path() {
            return "M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6Z";
        }
    }
    $.$mol_icon_file = $mol_icon_file;
})($ || ($ = {}));
//file.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_cross extends $.$mol_icon {
        path() {
            return "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z";
        }
    }
    $.$mol_icon_cross = $mol_icon_cross;
})($ || ($ = {}));
//cross.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_click(event, force) {
            return (event !== void 0) ? event : null;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "click": (event) => this.event_activate(event), "keypress": (event) => this.event_key_press(event) }));
        }
        event_activate(event, force) {
            return (event !== void 0) ? event : null;
        }
        event_key_press(event, force) {
            return (event !== void 0) ? event : null;
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "disabled": this.disabled(), "role": "button", "tabindex": this.tab_index(), "title": this.hint() }));
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        sub() {
            return [this.title()];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.event_click(next);
                this.click(next);
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
        }
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tbackground-color: none;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n\n[mol_button_typed] {\n\tjustify-content: center;\n\talign-content: center;\n\talign-items: center;\n\tvertical-align: middle;\n\ttext-align: center;\n\tpadding: .5rem 1rem;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_button_typed][disabled] {\n\tcolor: var(--mol_theme_text);\n\tpointer-events: none;\n}\n\n[mol_button_major] {\n\tbox-shadow: 0 0 0 1px var(--mol_theme_back);\n}\n\n[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_major][disabled] {\n\topacity: .5;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tcursor: pointer;\n\tbackground-color: var(--mol_theme_hover);\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $.$mol_button {
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
(function ($) {
    class $mol_button_major extends $.$mol_button_typed {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_theme": "$mol_theme_accent" }));
        }
    }
    $.$mol_button_major = $mol_button_major;
})($ || ($ = {}));
(function ($) {
    class $mol_button_minor extends $.$mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//button_types.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                var _a;
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = (_a = task.call(this, next)) !== null && _a !== void 0 ? _a : next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val, force) {
            return (val !== void 0) ? val : null;
        }
        field() {
            return (Object.assign(Object.assign({}, super.field()), { "scrollTop": this.scroll_top(), "scrollLeft": this.scroll_left() }));
        }
        scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        scroll_left(val, force) {
            return (val !== void 0) ? val : 0;
        }
        event() {
            return (Object.assign(Object.assign({}, super.event()), { "scroll": (event) => this.event_scroll(event) }));
        }
        event_scroll(event, force) {
            return (event !== void 0) ? event : null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                if (this._event_scroll_timer())
                    this._event_scroll_timer().destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_frame($.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'block',
            overflow: 'auto',
            flex: 'auto',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            transform: 'translateZ(0)',
            boxShadow: `inset 0 0 0 .5px ${"var(--mol_theme_line)"}`,
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: "var(--mol_theme_line)",
            },
            '::-webkit-scrollbar-track': {
                background: "var(--mol_theme_line)",
            },
            '::-webkit-scrollbar-thumb': {
                background: "var(--mol_theme_control)",
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [this.Head(), this.Body(), this.Foot()];
        }
        Head() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.head();
                return obj;
            })(new this.$.$mol_view());
        }
        head() {
            return [this.Title(), this.Tools()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                obj.event_click = (val) => this.event_top(val);
                return obj;
            })(new this.$.$mol_button());
        }
        event_top(val, force) {
            return (val !== void 0) ? val : null;
        }
        Tools() {
            return ((obj) => {
                obj.sub = () => this.tools();
                return obj;
            })(new this.$.$mol_view());
        }
        tools() {
            return [];
        }
        Body() {
            return ((obj) => {
                obj.scroll_top = (val) => this.body_scroll_top(val);
                obj.sub = () => this.body();
                return obj;
            })(new this.$.$mol_scroll());
        }
        body_scroll_top(val, force) {
            return (val !== void 0) ? val : 0;
        }
        body() {
            return [];
        }
        Foot() {
            return ((obj) => {
                obj.attr = () => ({
                    "mol_theme": "$mol_theme_base",
                });
                obj.sub = () => this.foot();
                return obj;
            })(new this.$.$mol_view());
        }
        foot() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
            style() {
                return Object.assign(Object.assign({}, super.style()), { minWidth: 0 });
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        const { calc } = $.$mol_style_func;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flexDirection: 'column',
            flex: 'auto',
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: "var(--mol_theme_back)",
            color: "var(--mol_theme_text)",
            zIndex: '0',
            overflow: 'hidden',
            boxShadow: `inset 0 0 0 .5px ${"var(--mol_theme_line)"}`,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: calc(`1.5em + 2rem`),
                padding: rem(.5),
            },
            Title: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: $.$mol_style_unit.per(50),
                },
                padding: rem(.5),
                wordBreak: 'normal',
                cursor: 'default',
                ':empty': {
                    display: 'none',
                },
            },
            Tools: {
                flex: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
                ':empty': {
                    display: 'none',
                },
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: $.$mol_style_unit.per(100),
                },
                margin: 0,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_syntax {
        constructor(lexems) {
            this['lexems()'] = lexems;
        }
        lexems() {
            return this['lexems()'];
        }
        rules() {
            let rules = this['rules()'];
            if (rules)
                return rules;
            rules = [];
            let lexems = this.lexems();
            for (let name in lexems) {
                rules.push({
                    name: name,
                    regExp: lexems[name],
                    size: RegExp('^$|' + lexems[name].source).exec('').length - 1,
                });
            }
            return this['rules()'] = rules;
        }
        regExp() {
            let regExp = this['regExp()'];
            if (regExp)
                return regExp;
            const parts = '(' + this.rules().map(rule => rule.regExp.source).join(')|(') + ')';
            regExp = RegExp(`([^]*?)(?:(${parts})|$(?![^]))`, 'gm');
            return this['regExp()'] = regExp;
        }
        tokenize(text) {
            const tokens = [];
            const rules = this.rules();
            const regExp = this.regExp();
            const regExpSize = RegExp('^$|' + regExp.source).exec('').length - 1;
            let position = 0;
            parsing: while (position < text.length) {
                regExp.lastIndex = position;
                var found = regExp.exec(text);
                if (position === regExp.lastIndex)
                    throw new Error('Empty token');
                position = regExp.lastIndex;
                var prefix = found[1];
                if (prefix) {
                    tokens.push({
                        name: '',
                        found: prefix,
                        chunks: [],
                    });
                }
                var suffix = found[2];
                if (suffix) {
                    let offset = 4;
                    for (let rule of rules) {
                        if (found[offset - 1]) {
                            tokens.push({
                                name: rule.name,
                                found: suffix,
                                chunks: found.slice(offset, offset + rule.size)
                            });
                            continue parsing;
                        }
                        offset += rule.size + 1;
                    }
                    throw new Error('Something wrong');
                }
            }
            return tokens;
        }
    }
    $.$mol_syntax = $mol_syntax;
})($ || ($ = {}));
//syntax.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_syntax_md_flow = new $.$mol_syntax({
        'quote': /^((?:(?:> )(?:[^]*?)$(\r?\n?))+)([\n\r]*)/,
        'header': /^(#+)(\s*)(.*?)$([\n\r]*)/,
        'list': /^((?:(?:\s?[*+-]|\d+\.)\s+(?:[^]*?)$(?:\r?\n?))+)((?:\r?\n)*)/,
        'code': /^(```\s*)(\w*)[\r\n]+([^]*?)^(```)$([\n\r]*)/,
        'code-indent': /^((?:(?:  |\t)(?:[^]*?)$([\n\r]*))+)/,
        'table': /((?:^\|.+?$\r?\n)+)([\n\r]*)/,
        'block': /^(.*?(?:\r?\n.+?)*)$((?:\r?\n)*)/,
    });
    $.$mol_syntax_md_line = new $.$mol_syntax({
        'strong': /\*\*(.+?)\*\*/,
        'emphasis': /\*(?!\s)(.+?)\*/,
        'code3': /```(.+?)```/,
        'code': /`(.+?)`/,
        'strike': /~~(.+?)~~/,
        'text-link': /\[(.*?(?:\[.*?\].*?)*)\]\((.*?)\)/,
        'image-link': /!\[([^\[\]]*?)\]\((.*?)\)/,
    });
    $.$mol_syntax_md_code = new $.$mol_syntax({
        'code-docs': /\/\/\/.*?$/,
        'code-comment-block': /(?:\/\*[^]*?\*\/|\/\+[^]*?\+\/|<![^]*?>)/,
        'code-link': /\w+:\/\/\S*/,
        'code-comment-inline': /\/\/.*?$/,
        'code-string': /(?:".*?"|'.*?'|`.*?`|\/.+?\/[gmi]*|(?:^|[ \t])\\[^\n]*\n)/,
        'code-number': /[+-]?(?:\d*\.)?\d+\w*/,
        'code-call': /\.?\w+(?=\()/,
        'code-field': /(?:\.\w+|[\w-]+\??\s*:(?!\/\/))/,
        'code-keyword': /\b(class|interface|type|function|extends|implements|module|namespace|import|export|include|require|var|let|const|for|do|while|until|in|of|new|if|then|else|switch|case|this|return|async|await|try|catch|break|continue|get|set|public|private|protected|string|boolean|number|null|undefined|true|false|void)\b/,
        'code-global': /[$]\w*/,
        'code-decorator': /@\s*\S+/,
        'code-tag': /<\/?[\w-]+\/?>?/,
        'code-punctuation': /[\-\[\]\{\}\(\)<=>`~!\?@#\$%&\*_\+\\\/\|'";:\.,\^]/,
    });
})($ || ($ = {}));
//md.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $.$mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        rows() {
            return [];
        }
        Empty() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        Gap_before() {
            return ((obj) => {
                obj.style = () => ({
                    "paddingTop": this.gap_before(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        gap_before() {
            return 0;
        }
        Gap_after() {
            return ((obj) => {
                obj.style = () => ({
                    "paddingTop": this.gap_after(),
                });
                return obj;
            })(new this.$.$mol_view());
        }
        gap_after() {
            return 0;
        }
        view_window() {
            return [0, 0];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $.$mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//list.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                if (!$.$mol_dom_context.CSS)
                    return false;
                return $.$mol_dom_context.CSS.supports('overflow-anchor:auto');
            }
            view_window() {
                var _a, _b, _c, _d, _e, _f;
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                let [min, max] = (_a = $.$mol_mem_cached(() => this.view_window())) !== null && _a !== void 0 ? _a : [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const rect = this.view_rect();
                const gap_before = (_b = $.$mol_mem_cached(() => this.gap_before())) !== null && _b !== void 0 ? _b : 0;
                const gap_after = (_c = $.$mol_mem_cached(() => this.gap_after())) !== null && _c !== void 0 ? _c : 0;
                let top = ((_d = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _d !== void 0 ? _d : 0) + gap_before;
                let bottom = ((_e = rect === null || rect === void 0 ? void 0 : rect.bottom) !== null && _e !== void 0 ? _e : 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = ((_f = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _f !== void 0 ? _f : 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top)) {
                    min2 = max;
                    top2 = bottom;
                }
                if (bottom >= limit_bottom) {
                    max2 = min;
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                var sub = this.sub();
                const next = sub.slice(...this.view_window());
                if (this.gap_before())
                    next.unshift(this.Gap_before());
                if (this.gap_after())
                    next.push(this.Gap_after());
                return next;
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => sum + view.minimal_height(), 0);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $.$mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//list.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: block;\n\t/* display: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n\n[mol_list] > * {\n\tdisplay: block;\n}\n");
})($ || ($ = {}));
//list.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_float extends $.$mol_view {
    }
    $.$mol_float = $mol_float;
})($ || ($ = {}));
//float.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/float/float.view.css", "[mol_float] {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\topacity: 1;\n\ttransition: opacity .25s ease-in;\n\tdisplay: block;\n}\n\n[mol_float_scrolling] {\n\topacity: 0;\n\ttransition-duration: 0;\n}\n");
})($ || ($ = {}));
//float.view.css.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: .5rem;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n");
})($ || ($ = {}));
//check.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $.$mol_button_minor {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_check_checked": this.checked(), "aria-checked": this.checked(), "role": "checkbox" }));
        }
        checked(val, force) {
            return (val !== void 0) ? val : false;
        }
        sub() {
            return [this.Icon(), this.label()];
        }
        Icon() {
            return null;
        }
        label() {
            return [this.Title()];
        }
        Title() {
            return ((obj) => {
                obj.sub = () => [this.title()];
                return obj;
            })(new this.$.$mol_view());
        }
        title() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//check.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$.$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//check.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $.$mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//tick.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $.$mol_check {
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_tick());
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//box.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tmargin: .25rem;\n\tborder-radius: var(--mol_skin_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//box.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_icon_chevron extends $.$mol_icon {
        path() {
            return "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z";
        }
    }
    $.$mol_icon_chevron = $mol_icon_chevron;
})($ || ($ = {}));
//chevron.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_check_expand extends $.$mol_check {
        minimal_height() {
            return 40;
        }
        Icon() {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_chevron());
        }
        level() {
            return 0;
        }
        style() {
            return (Object.assign(Object.assign({}, super.style()), { "paddingLeft": this.level_style() }));
        }
        level_style() {
            return "0px";
        }
        checked(val, force) {
            return this.expanded(val);
        }
        expanded(val, force) {
            return (val !== void 0) ? val : false;
        }
        enabled() {
            return this.expandable();
        }
        expandable() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "Icon", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "checked", null);
    __decorate([
        $.$mol_mem
    ], $mol_check_expand.prototype, "expanded", null);
    $.$mol_check_expand = $mol_check_expand;
})($ || ($ = {}));
//expand.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_expand extends $.$mol_check_expand {
            level_style() {
                return `${this.level() * 1.25 - 1}rem`;
            }
            expandable() {
                return this.expanded() !== null;
            }
        }
        $$.$mol_check_expand = $mol_check_expand;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//expand.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/check/expand/expand.view.css", "[mol_check_expand] {\n}\n\n[mol_check_expand][disabled] [mol_check_expand_icon] {\n\tvisibility: hidden;\n}\n\n[mol_check_expand_icon] {\n\tbox-shadow: none;\n\tmargin: .25rem 0;\n}\n[mol_check_expand]:not([mol_check_checked]) > [mol_check_expand_icon] {\n\ttransform: rotateZ(0deg);\n}\n\n[mol_check_expand][mol_check_checked] > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg);\n}\n\n[mol_check_expand]:hover > [mol_check_expand_icon] {\n\ttransform: scale(1.25);\n}\n\n[mol_check_expand][mol_check_checked]:hover > [mol_check_expand_icon] {\n\ttransform: rotateZ(90deg) scale(1.25);\n}\n\n[mol_check_box_icon] + div:not(:empty) {\n}\n\n[mol_check_expand_icon] {\n\tvertical-align: text-top;\n}\n\n[mol_check_expand_label] {\n\tmargin-left: 0;\n}\n");
})($ || ($ = {}));
//expand.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $.$mol_view {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        parts() {
            return [];
        }
        Low(id) {
            return ((obj) => {
                obj.sub = () => [this.string(id)];
                return obj;
            })(new this.$.$mol_view());
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//dimmer.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (!needle)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? strings[index] : this.Low(index));
                }
                return chunks;
            }
            strings() {
                return this.haystack().split(new RegExp(`(${this.needle()})`, 'gi'));
            }
            string(index) {
                return this.strings()[index];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dimmer.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer_low] {\n\topacity: 0.66;\n}\n");
})($ || ($ = {}));
//dimmer.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_grid extends $.$mol_scroll {
        row_height() {
            return 40;
        }
        row_ids() {
            return [];
        }
        row_id(index) {
            return null;
        }
        col_ids() {
            return [];
        }
        records() {
            return ({});
        }
        record(id) {
            return null;
        }
        hierarchy() {
            return null;
        }
        hierarchy_col() {
            return "";
        }
        sub() {
            return [this.Head(), this.Table()];
        }
        Table() {
            return ((obj) => {
                obj.sub = () => this.rows();
                return obj;
            })(new this.$.$mol_grid_table());
        }
        rows() {
            return [];
        }
        Head() {
            return ((obj) => {
                obj.cells = () => this.head_cells();
                return obj;
            })(new this.$.$mol_grid_row());
        }
        head_cells() {
            return [];
        }
        Row(id) {
            return ((obj) => {
                obj.minimal_height = () => this.row_height();
                obj.cells = () => this.cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        cells(id) {
            return [];
        }
        Cell(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_view());
        }
        cell(id) {
            return null;
        }
        Cell_text(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_text(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        cell_content_text(id) {
            return this.cell_content(id);
        }
        cell_content(id) {
            return [];
        }
        Cell_number(id) {
            return ((obj) => {
                obj.sub = () => this.cell_content_number(id);
                return obj;
            })(new this.$.$mol_grid_number());
        }
        cell_content_number(id) {
            return this.cell_content(id);
        }
        Col_head(id) {
            return ((obj) => {
                obj.dom_name = () => "th";
                obj.sub = () => this.col_head_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
        col_head_content(id) {
            return [];
        }
        Cell_branch(id) {
            return ((obj) => {
                obj.level = () => this.cell_level(id);
                obj.label = () => this.cell_content(id);
                obj.expanded = (val) => this.cell_expanded(id, val);
                return obj;
            })(new this.$.$mol_check_expand());
        }
        cell_level(id) {
            return 0;
        }
        cell_expanded(id, val, force) {
            return (val !== void 0) ? val : false;
        }
        Cell_content(id) {
            return [this.Cell_dimmer(id)];
        }
        Cell_dimmer(id) {
            return ((obj) => {
                obj.needle = () => this.needle();
                obj.haystack = () => this.cell_value(id);
                return obj;
            })(new this.$.$mol_dimmer());
        }
        needle() {
            return "";
        }
        cell_value(id) {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Table", null);
    __decorate([
        $.$mol_mem
    ], $mol_grid.prototype, "Head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_number", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Col_head", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_branch", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "cell_expanded", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_grid.prototype, "Cell_dimmer", null);
    $.$mol_grid = $mol_grid;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_table extends $.$mol_list {
        dom_name() {
            return "table";
        }
    }
    $.$mol_grid_table = $mol_grid_table;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_row extends $.$mol_view {
        dom_name() {
            return "tr";
        }
        sub() {
            return this.cells();
        }
        cells() {
            return [];
        }
    }
    $.$mol_grid_row = $mol_grid_row;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_cell extends $.$mol_view {
        dom_name() {
            return "td";
        }
        minimal_height() {
            return 40;
        }
    }
    $.$mol_grid_cell = $mol_grid_cell;
})($ || ($ = {}));
(function ($) {
    class $mol_grid_number extends $.$mol_grid_cell {
    }
    $.$mol_grid_number = $mol_grid_number;
})($ || ($ = {}));
//grid.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_grid extends $.$mol_grid {
            head_cells() {
                return this.col_ids().map(colId => this.Col_head(colId));
            }
            col_head_content(colId) {
                return [colId];
            }
            rows() {
                return this.row_ids().map(id => this.Row(id));
            }
            cells(row_id) {
                return this.col_ids().map(col_id => this.Cell({ row: row_id, col: col_id }));
            }
            col_type(col_id) {
                if (col_id === this.hierarchy_col())
                    return 'branch';
                const rowFirst = this.row_id(0);
                const val = this.record(rowFirst[rowFirst.length - 1])[col_id];
                if (typeof val === 'number')
                    return 'number';
                return 'text';
            }
            Cell(id) {
                switch (this.col_type(id.col).valueOf()) {
                    case 'branch': return this.Cell_branch(id);
                    case 'number': return this.Cell_number(id);
                }
                return this.Cell_text(id);
            }
            cell_content(id) {
                return [this.record(id.row[id.row.length - 1])[id.col]];
            }
            records() {
                return [];
            }
            record(id) {
                return this.records()[id];
            }
            record_ids() {
                return Object.keys(this.records());
            }
            row_id(index) {
                return this.row_ids().slice(index, index + 1).valueOf()[0];
            }
            col_ids() {
                const rowFirst = this.row_id(0);
                if (rowFirst === void 0)
                    return [];
                const record = this.record(rowFirst[rowFirst.length - 1]);
                if (!record)
                    return [];
                return Object.keys(record);
            }
            hierarchy() {
                const hierarchy = {};
                const root = hierarchy[''] = {
                    id: '',
                    parent: null,
                    sub: [],
                };
                this.record_ids().map(id => {
                    root.sub.push(hierarchy[id] = {
                        id,
                        parent: root,
                        sub: [],
                    });
                });
                return hierarchy;
            }
            row_sub_ids(row) {
                return this.hierarchy()[row[row.length - 1]].sub.map(child => row.concat(child.id));
            }
            row_root_id() {
                return [''];
            }
            cell_level(id) {
                return id.row.length - 1;
            }
            row_ids() {
                const next = [];
                const add = (row) => {
                    next.push(row);
                    if (this.row_expanded(row)) {
                        this.row_sub_ids(row).forEach(child => add(child));
                    }
                };
                this.row_sub_ids(this.row_root_id()).forEach(child => add(child));
                return next;
            }
            row_expanded(row_id, next) {
                if (!this.row_sub_ids(row_id).length)
                    return null;
                const key = `row_expanded(${JSON.stringify(row_id)})`;
                const next2 = $.$mol_state_session.value(key, next);
                return (next2 == null) ? this.row_expanded_default(row_id) : next2;
            }
            row_expanded_default(row_id) {
                return row_id.length < 3;
            }
            cell_expanded(id, next) {
                return this.row_expanded(id.row, next);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "head_cells", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_grid.prototype, "col_type", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "record_ids", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "hierarchy", null);
        __decorate([
            $.$mol_mem
        ], $mol_grid.prototype, "row_ids", null);
        $$.$mol_grid = $mol_grid;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//grid.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/grid/grid.view.css", "[mol_grid] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n\tposition: relative;\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_gap] {\n\tposition: absolute;\n\tpadding: .1px;\n\ttop: 0;\n\ttransform: translateZ(0);\n}\n\n[mol_grid_table] {\n\tborder-spacing: 0;\n\tdisplay: table-row-group;\n\tposition: relative;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_table] > * {\n\tdisplay: table-row;\n\ttransition: none;\n}\n\n[mol_grid_head] > * ,\n[mol_grid_table] > * > * {\n\tdisplay: table-cell;\n\ttransform: translateZ(0);\n\tpadding: .5rem 1rem;\n\twhite-space: nowrap;\n\tvertical-align: middle;\n\tbox-shadow: inset 0 0 0 .5px var(--mol_theme_line);\n}\n\n[mol_grid_head] {\n\ttransform: none;\n}\n\n[mol_grid_head] > * {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_grid_cell_number] {\n\ttext-align: right;\n}\n\n[mol_grid_col_head] {\n\tfont-weight: inherit;\n\ttext-align: inherit;\n\tdisplay: table-cell;\n}\n\n[mol_grid_cell_dimmer] {\n\tdisplay: inline-block;\n\tvertical-align: inherit;\n}\n");
})($ || ($ = {}));
//grid.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $.$mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 8;
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//paragraph.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $.$mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            minimal_width() {
                return Math.max(Math.min(this.$.$mol_window.size().width, this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.ceil(this.maximal_width() / this.minimal_width()) * this.line_height();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_width", null);
        __decorate([
            $.$mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//paragraph.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_text extends $.$mol_list {
        uri_base() {
            return "";
        }
        text() {
            return "";
        }
        tokens() {
            return [];
        }
        Quote(id) {
            return ((obj) => {
                obj.text = () => this.quote_text(id);
                return obj;
            })(new this.$.$mol_text());
        }
        quote_text(id) {
            return "";
        }
        Row(id) {
            return ((obj) => {
                obj.sub = () => this.block_content(id);
                obj.type = () => this.block_type(id);
                return obj;
            })(new this.$.$mol_text_row());
        }
        block_content(id) {
            return [];
        }
        block_type(id) {
            return "";
        }
        Span(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_span());
        }
        Link(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_link());
        }
        Image(id) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_text_image());
        }
        Header(id) {
            return ((obj) => {
                obj.level = () => this.header_level(id);
                obj.content = () => this.header_content(id);
                return obj;
            })(new this.$.$mol_text_header());
        }
        header_level(id) {
            return 0;
        }
        header_content(id) {
            return [];
        }
        Table(id) {
            return ((obj) => {
                obj.head_cells = () => this.table_head_cells(id);
                obj.rows = () => this.table_rows(id);
                return obj;
            })(new this.$.$mol_grid());
        }
        table_head_cells(id) {
            return [];
        }
        table_rows(id) {
            return [];
        }
        Table_row(id) {
            return ((obj) => {
                obj.cells = () => this.table_cells(id);
                return obj;
            })(new this.$.$mol_grid_row());
        }
        table_cells(id) {
            return [];
        }
        Table_cell(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_grid_cell());
        }
        table_cell_content(id) {
            return [];
        }
        Table_cell_head(id) {
            return ((obj) => {
                obj.sub = () => this.table_cell_content(id);
                return obj;
            })(new this.$.$mol_float());
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Quote", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Span", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Link", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Image", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Header", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_row", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_text.prototype, "Table_cell_head", null);
    $.$mol_text = $mol_text;
})($ || ($ = {}));
(function ($) {
    class $mol_text_row extends $.$mol_paragraph {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type() {
            return "";
        }
    }
    $.$mol_text_row = $mol_text_row;
})($ || ($ = {}));
(function ($) {
    class $mol_text_header extends $.$mol_paragraph {
        dom_name() {
            return "h";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_header_level": this.level() }));
        }
        level(val, force) {
            return (val !== void 0) ? val : 0;
        }
        sub() {
            return this.content();
        }
        content() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_header.prototype, "level", null);
    $.$mol_text_header = $mol_text_header;
})($ || ($ = {}));
(function ($) {
    class $mol_text_span extends $.$mol_paragraph {
        dom_name() {
            return "span";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_span.prototype, "content", null);
    $.$mol_text_span = $mol_text_span;
})($ || ($ = {}));
(function ($) {
    class $mol_text_link extends $.$mol_link {
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "mol_text_type": this.type() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        uri() {
            return this.link();
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return this.content();
        }
        content(val, force) {
            return (val !== void 0) ? val : [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_link.prototype, "content", null);
    $.$mol_text_link = $mol_text_link;
})($ || ($ = {}));
(function ($) {
    class $mol_text_image extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "allowfullscreen": true, "mol_text_type": this.type(), "data": this.link() }));
        }
        type(val, force) {
            return (val !== void 0) ? val : "";
        }
        link(val, force) {
            return (val !== void 0) ? val : "";
        }
        sub() {
            return [this.title()];
        }
        title(val, force) {
            return (val !== void 0) ? val : "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "type", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "link", null);
    __decorate([
        $.$mol_mem
    ], $mol_text_image.prototype, "title", null);
    $.$mol_text_image = $mol_text_image;
})($ || ($ = {}));
//text.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_text extends $.$mol_text {
            tokens() {
                return this.$.$mol_syntax_md_flow.tokenize(this.text());
            }
            rows() {
                return this.tokens().map((token, index) => {
                    switch (token.name) {
                        case 'table': return this.Table(index);
                        case 'header': return this.Header(index);
                        case 'quote': return this.Quote(index);
                    }
                    return this.Row(index);
                });
            }
            header_level(index) {
                return this.tokens()[index].chunks[0].length;
            }
            header_content(index) {
                return this.text2spans(`${index}`, this.tokens()[index].chunks[2]);
            }
            quote_text(index) {
                return this.tokens()[index].chunks[0].replace(/^> /mg, '');
            }
            block_type(index) {
                return this.tokens()[index].name;
            }
            cell_contents(indexBlock) {
                return this.tokens()[indexBlock].chunks[0]
                    .split(/\r?\n/g)
                    .filter(row => row && !/\|--/.test(row))
                    .map((row, rowId) => {
                    return row.split(/\|/g)
                        .filter(cell => cell)
                        .map((cell, cellId) => cell.trim());
                });
            }
            table_rows(blockId) {
                return this.cell_contents(blockId)
                    .slice(1)
                    .map((row, rowId) => this.Table_row({ block: blockId, row: rowId + 1 }));
            }
            table_head_cells(blockId) {
                return this.cell_contents(blockId)[0]
                    .map((cell, cellId) => this.Table_cell_head({ block: blockId, row: 0, cell: cellId }));
            }
            table_cells(id) {
                return this.cell_contents(id.block)[id.row]
                    .map((cell, cellId) => this.Table_cell({ block: id.block, row: id.row, cell: cellId }));
            }
            table_cell_content(id) {
                return this.text2spans(`${id.block}/${id.row}/${id.cell}`, this.cell_contents(id.block)[id.row][id.cell]);
            }
            uri_base() {
                return $.$mol_dom_context.document.location.href;
            }
            uri_resolve(uri) {
                const url = new URL(uri, this.uri_base());
                return url.toString();
            }
            text2spans(prefix, text) {
                return this.$.$mol_syntax_md_line.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    switch (token.name) {
                        case 'text-link': {
                            if (/^(\w+script+:)+/.test(token.chunks[1])) {
                                const span = this.Span(id);
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                            else {
                                const span = this.Link(id);
                                span.type(token.name);
                                span.link(this.uri_resolve(token.chunks[1]));
                                span.content(this.text2spans(id, token.chunks[0]));
                                return span;
                            }
                        }
                        case 'image-link': {
                            const span = this.Image(token.chunks[1]);
                            span.type(token.name);
                            span.link(this.uri_resolve(token.chunks[1]));
                            span.title(token.chunks[0]);
                            return span;
                        }
                        case 'code3':
                        case 'code': {
                            const span = this.Span(id);
                            span.type('code');
                            span.content(this.code2spans(id, token.chunks[0]));
                            return span;
                        }
                    }
                    const span = this.Span(id);
                    span.type(token.name);
                    span.content(token.name
                        ? [].concat.apply([], token.chunks.map((text, index) => this.text2spans(`${id}/${index}`, text)))
                        : [token.found]);
                    return span;
                });
            }
            code2spans(prefix, text) {
                return this.$.$mol_syntax_md_code.tokenize(text).map((token, index) => {
                    const id = `${prefix}/${index}`;
                    const span = this.Span(id);
                    span.type(token.name);
                    switch (token.name) {
                        case 'code-docs': {
                            span.content(this.text2spans(`${id}/${index}`, token.found));
                            return span;
                        }
                        case 'code-string': {
                            span.content([token.found[0], ...this.code2spans(`${id}/${index}`, token.found.slice(1, token.found.length - 1)), token.found[token.found.length - 1]]);
                            return span;
                        }
                        default: {
                            span.content([token.found]);
                            return span;
                        }
                    }
                });
            }
            block_content(indexBlock) {
                const token = this.tokens()[indexBlock];
                switch (token.name) {
                    case 'header': return this.text2spans(`${indexBlock}`, token.chunks[2]);
                    case 'list': return this.text2spans(`${indexBlock}`, token.chunks[0]);
                    case 'code': return this.code2spans(`${indexBlock}`, token.chunks[2]);
                    case 'code-indent': return this.code2spans(`${indexBlock}`, token.chunks[0].replace(/[\n\r]*$/, '\n').replace(/^\t/gm, ''));
                }
                return this.text2spans(`${indexBlock}`, token.chunks[0]);
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "tokens", null);
        __decorate([
            $.$mol_mem
        ], $mol_text.prototype, "rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "cell_contents", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_rows", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_head_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cells", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "table_cell_content", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "text2spans", null);
        __decorate([
            $.$mol_fiber.method
        ], $mol_text.prototype, "code2spans", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_text.prototype, "block_content", null);
        $$.$mol_text = $mol_text;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//text.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/text/text.view.css", "[mol_text] {\n\tline-height: 1.5;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tpadding: .5rem;\n\tborder-radius: var(--mol_skin_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_row] {\n\tmargin: .5rem;\n\toverflow: auto;\n\tmax-width: 100%;\n}\n\n[mol_text_type=\"block\"] {\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\tpadding: .5rem;\n\tfont-weight: 500;\n\tmargin: 0;\n}\n\n[mol_text_header_level=\"1\"] {\n\tfont-size: 1.5em;\n}\n\n[mol_text_header_level=\"2\"] {\n\tfont-size: 1.3em;\n}\n\n[mol_text_header_level=\"3\"] {\n\tfont-size: 1.1em;\n}\n\n[mol_text_header_level=\"4\"] {\n\tfont-size: 1.1em;\n\tfont-style: italic;\n}\n\n[mol_text_header_level=\"5\"] {\n\tfont-size: 1.1em;\n\tfont-weight: normal;\n\tfont-style: italic;\n}\n\n[mol_text_type=\"list-item\"] {\n\tdisplay: list-item;\n}\n\n[mol_text_type=\"list-item\"]:before {\n\tcontent: '•';\n\tmargin-right: 1ch;\n}\n\n[mol_text_table] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\toverflow: auto;\n\tmargin: .5rem;\n\tflex-grow: 0;\n}\n\n[mol_text_type=\"code-indent\"] ,\n[mol_text_type=\"code\"] {\n\tfont-family: var(--mol_skin_font_monospace);\n\twhite-space: pre-wrap;\n\tborder-radius: var(--mol_skin_round);\n}\n\n[mol_text_type=\"text-link\"] {\n\tcolor: var(--mol_theme_control);\n\ttext-decoration: none;\n\tpadding: 0;\n}\n\n[mol_text_link]:hover ,\n[mol_text_link]:focus {\n\toutline: none;\n}\n\n[mol_text_image] {\n\tmax-width: 100%;\n\tmax-height: 75vh;\n\tobject-fit: scale-down;\n}\n\n[mol_text_type=\"strong\"] {\n\tfont-weight: bolder;\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\ttext-decoration: line-through;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"code-keyword\"] {\n\tcolor: hsl(0, 70%, 60%);\n}\n\n[mol_text_type=\"code-field\"] {\n\tcolor: hsl(300, 70%, 60%);\n}\n\n[mol_text_type=\"code-tag\"] {\n\tcolor: hsl(330, 70%, 60%);\n}\n\n[mol_text_type=\"code-global\"] {\n\tcolor: hsl(210, 80%, 60%);\n}\n\n[mol_text_type=\"code-decorator\"] {\n\tcolor: hsl(180, 40%, 60%);\n}\n\n[mol_text_type=\"code-punctuation\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-string\"] {\n\tcolor: hsl(90, 40%, 50%);\n}\n\n[mol_text_type=\"code-number\"] {\n\tcolor: hsl(60, 70%, 30%);\n}\n\n[mol_text_type=\"code-call\"] {\n\tcolor: hsl(270, 60%, 60%);\n}\n\n[mol_text_type=\"code-link\"] {\n\tcolor: hsl(240, 60%, 60%);\n}\n\n[mol_text_type=\"code-comment-inline\"] ,\n[mol_text_type=\"code-comment-block\"] {\n\topacity: .5;\n}\n\n[mol_text_type=\"code-docs\"] {\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//text.view.css.js.map
;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "pdfjs-dist/build/" ) ] }; 
;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],t):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=t():e["pdfjs-dist/build/pdf"]=e.pdfjsLib=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=r(1),i=r(179),a=r(194),o=r(195),s=r(183),u=r(196),c=r(188),l=r(185);if(r(4)()){var h=r(197).PDFNodeStream;i.setPDFNetworkStreamFactory((function(e){return new h(e)}))}else{var f,d=r(200).PDFNetworkStream;s.isFetchSupported()&&(f=r(201).PDFFetchStream),i.setPDFNetworkStreamFactory((function(e){return f&&s.isValidFetchUrl(e.url)?new f(e):new d(e)}))}t.build=i.build,t.version=i.version,t.getDocument=i.getDocument,t.LoopbackPort=i.LoopbackPort,t.PDFDataRangeTransport=i.PDFDataRangeTransport,t.PDFWorker=i.PDFWorker,t.renderTextLayer=a.renderTextLayer,t.AnnotationLayer=o.AnnotationLayer,t.createPromiseCapability=n.createPromiseCapability,t.PasswordResponses=n.PasswordResponses,t.InvalidPDFException=n.InvalidPDFException,t.MissingPDFException=n.MissingPDFException,t.SVGGraphics=u.SVGGraphics,t.NativeImageDecoding=n.NativeImageDecoding,t.CMapCompressionType=n.CMapCompressionType,t.PermissionFlag=n.PermissionFlag,t.UnexpectedResponseException=n.UnexpectedResponseException,t.OPS=n.OPS,t.VerbosityLevel=n.VerbosityLevel,t.UNSUPPORTED_FEATURES=n.UNSUPPORTED_FEATURES,t.createValidAbsoluteUrl=n.createValidAbsoluteUrl,t.createObjectURL=n.createObjectURL,t.removeNullCharacters=n.removeNullCharacters,t.shadow=n.shadow,t.Util=n.Util,t.ReadableStream=n.ReadableStream,t.RenderingCancelledException=s.RenderingCancelledException,t.getFilenameFromUrl=s.getFilenameFromUrl,t.LinkTarget=s.LinkTarget,t.addLinkAttributes=s.addLinkAttributes,t.loadScript=s.loadScript,t.PDFDateString=s.PDFDateString,t.GlobalWorkerOptions=c.GlobalWorkerOptions,t.apiCompatibilityParams=l.apiCompatibilityParams},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.arrayByteLength=C,t.arraysToBytes=function(e){var t=e.length;if(1===t&&e[0]instanceof Uint8Array)return e[0];for(var r=0,n=0;n<t;n++)r+=C(e[n]);for(var i=0,a=new Uint8Array(r),o=0;o<t;o++){var s=e[o];s instanceof Uint8Array||(s="string"==typeof s?x(s):new Uint8Array(s));var u=s.byteLength;a.set(s,i),i+=u}return a},t.assert=v,t.bytesToString=function(e){v(null!==e&&"object"===a(e)&&void 0!==e.length,"Invalid argument for bytesToString");var t=e.length;if(t<8192)return String.fromCharCode.apply(null,e);for(var r=[],n=0;n<t;n+=8192){var i=Math.min(n+8192,t),o=e.subarray(n,i);r.push(String.fromCharCode.apply(null,o))}return r.join("")},t.createPromiseCapability=function(){var e=Object.create(null),t=!1;return Object.defineProperty(e,"settled",{get:function(){return t}}),e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0,r(e)},e.reject=function(e){t=!0,n(e)}})),e},t.getVerbosityLevel=function(){return f},t.info=function(e){f>=h.INFOS&&console.log("Info: ".concat(e))},t.isArrayBuffer=function(e){return"object"===a(e)&&null!==e&&void 0!==e.byteLength},t.isArrayEqual=function(e,t){if(e.length!==t.length)return!1;return e.every((function(e,r){return e===t[r]}))},t.isBool=function(e){return"boolean"==typeof e},t.isEmptyObj=function(e){for(var t in e)return!1;return!0},t.isNum=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSpace=function(e){return 32===e||9===e||13===e||10===e},t.isSameOrigin=function(e,t){var r;try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(e){return!1}var n=new URL(t,r);return r.origin===n.origin},t.createValidAbsoluteUrl=function(e,t){if(!e)return null;try{var r=t?new URL(e,t):new URL(e);if(function(e){if(!e)return!1;switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}(r))return r}catch(e){}return null},t.isLittleEndian=function(){var e=new Uint8Array(4);return e[0]=1,1===new Uint32Array(e.buffer,0,1)[0]},t.isEvalSupported=function(){try{return new Function(""),!0}catch(e){return!1}},t.log2=function(e){if(e<=0)return 0;return Math.ceil(Math.log2(e))},t.readInt8=function(e,t){return e[t]<<24>>24},t.readUint16=function(e,t){return e[t]<<8|e[t+1]},t.readUint32=function(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0},t.removeNullCharacters=function(e){if("string"!=typeof e)return d("The argument for removeNullCharacters must be a string."),e;return e.replace(k,"")},t.setVerbosityLevel=function(e){Number.isInteger(e)&&(f=e)},t.shadow=function(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1}),r},t.string32=function(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)},t.stringToBytes=x,t.stringToPDFString=function(e){var t=e.length,r=[];if("þ"===e[0]&&"ÿ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n)<<8|e.charCodeAt(n+1)));else for(var i=0;i<t;++i){var a=T[e.charCodeAt(i)];r.push(a?String.fromCharCode(a):e.charAt(i))}return r.join("")},t.stringToUTF8String=function(e){return decodeURIComponent(escape(e))},t.utf8StringToString=function(e){return unescape(encodeURIComponent(e))},t.warn=d,t.unreachable=p,Object.defineProperty(t,"ReadableStream",{enumerable:!0,get:function(){return n.ReadableStream}}),t.createObjectURL=t.FormatError=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.NativeImageDecoding=t.MissingPDFException=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VerbosityLevel=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=t.BaseException=void 0,r(2);var n=r(177);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}t.IDENTITY_MATRIX=[1,0,0,1,0,0];t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0];t.NativeImageDecoding={NONE:"none",DECODE:"decode",DISPLAY:"display"};t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048};t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};t.AnnotationReplyType={GROUP:"Group",REPLY:"R"};t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512};t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864};t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"};t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"};var h={ERRORS:0,WARNINGS:1,INFOS:5};t.VerbosityLevel=h;t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2};t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"};t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};var f=h.WARNINGS;function d(e){f>=h.WARNINGS&&console.log("Warning: ".concat(e))}function p(e){throw new Error(e)}function v(e,t){e||p(t)}var g=function(){function e(t){this.constructor===e&&p("Cannot initialize BaseException."),this.message=t,this.name=this.constructor.name}return e.prototype=new Error,e.constructor=e,e}();t.BaseException=g;var m=function(e){function t(e,r){var n;return o(this,t),(n=s(this,u(t).call(this,e))).code=r,n}return c(t,e),t}(g);t.PasswordException=m;var y=function(e){function t(e,r){var n;return o(this,t),(n=s(this,u(t).call(this,e))).details=r,n}return c(t,e),t}(g);t.UnknownErrorException=y;var b=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}return c(t,e),t}(g);t.InvalidPDFException=b;var _=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}return c(t,e),t}(g);t.MissingPDFException=_;var A=function(e){function t(e,r){var n;return o(this,t),(n=s(this,u(t).call(this,e))).status=r,n}return c(t,e),t}(g);t.UnexpectedResponseException=A;var S=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}return c(t,e),t}(g);t.FormatError=S;var w=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}return c(t,e),t}(g);t.AbortException=w;var k=/\x00/g;function x(e){v("string"==typeof e,"Invalid argument for stringToBytes");for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n);return r}function C(e){return void 0!==e.length?e.length:(v(void 0!==e.byteLength),e.byteLength)}var P=["rgb(",0,",",0,",",0,")"],R=function(){function e(){o(this,e)}var t,r,n;return t=e,n=[{key:"makeCssRgb",value:function(e,t,r){return P[1]=e,P[3]=t,P[5]=r,P.join("")}},{key:"transform",value:function(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function(e,t){var r=t[0]*t[3]-t[1]*t[2];return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function(t,r){var n=e.applyTransform(t,r),i=e.applyTransform(t.slice(2,4),r),a=e.applyTransform([t[0],t[3]],r),o=e.applyTransform([t[2],t[1]],r);return[Math.min(n[0],i[0],a[0],o[0]),Math.min(n[1],i[1],a[1],o[1]),Math.max(n[0],i[0],a[0],o[0]),Math.max(n[1],i[1],a[1],o[1])]}},{key:"inverseTransform",value:function(e){var t=e[0]*e[3]-e[1]*e[2];return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],a=e[2]*t[1]+e[3]*t[3],o=(r+a)/2,s=Math.sqrt((r+a)*(r+a)-4*(r*a-i*n))/2,u=o+s||1,c=o-s||1;return[Math.sqrt(u),Math.sqrt(c)]}},{key:"normalizeRect",value:function(e){var t=e.slice(0);return e[0]>e[2]&&(t[0]=e[2],t[2]=e[0]),e[1]>e[3]&&(t[1]=e[3],t[3]=e[1]),t}},{key:"intersect",value:function(t,r){function n(e,t){return e-t}var i=[t[0],t[2],r[0],r[2]].sort(n),a=[t[1],t[3],r[1],r[3]].sort(n),o=[];return t=e.normalizeRect(t),r=e.normalizeRect(r),i[0]===t[0]&&i[1]===r[0]||i[0]===r[0]&&i[1]===t[0]?(o[0]=i[1],o[2]=i[2],a[0]===t[1]&&a[1]===r[1]||a[0]===r[1]&&a[1]===t[1]?(o[1]=a[1],o[3]=a[2],o):null):null}}],(r=null)&&i(t.prototype,r),n&&i(t,n),e}();t.Util=R;var T=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364];var E,O=(E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!r&&URL.createObjectURL){var n=new Blob([e],{type:t});return URL.createObjectURL(n)}for(var i="data:".concat(t,";base64,"),a=0,o=e.length;a<o;a+=3){var s=255&e[a],u=255&e[a+1],c=255&e[a+2],l=s>>2,h=(3&s)<<4|u>>4,f=a+1<o?(15&u)<<2|c>>6:64,d=a+2<o?63&c:64;i+=E[l]+E[h]+E[f]+E[d]}return i});t.createObjectURL=O},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=r(3);if(!i._pdfjsCompatibilityChecked){i._pdfjsCompatibilityChecked=!0;var a=r(4),o="object"===("undefined"==typeof window?"undefined":n(window))&&"object"===("undefined"==typeof document?"undefined":n(document));!i.btoa&&a()&&(i.btoa=function(e){return Buffer.from(e,"binary").toString("base64")}),!i.atob&&a()&&(i.atob=function(e){return Buffer.from(e,"base64").toString("binary")}),o&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),function(){if(o&&!a()){var e=document.createElement("div");if(e.classList.add("testOne","testTwo"),!0!==e.classList.contains("testOne")||!0!==e.classList.contains("testTwo")){var t=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var i=0,a=r;i<a.length;i++){var o=a[i];t.call(this,o)}},DOMTokenList.prototype.remove=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=0,a=t;i<a.length;i++){var o=a[i];r.call(this,o)}}}}}(),o&&!a()&&!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(e){var t=arguments.length>1?!!arguments[1]:!this.contains(e);return this[t?"add":"remove"](e),t}),String.prototype.startsWith||r(5),String.prototype.endsWith||r(57),String.prototype.includes||r(59),Array.prototype.includes||r(61),Array.from||r(68),Object.assign||r(89),Math.log2||(Math.log2=r(92)),Number.isNaN||(Number.isNaN=r(94)),Number.isInteger||(Number.isInteger=r(96)),i.Promise&&i.Promise.prototype&&i.Promise.prototype.finally||(i.Promise=r(99)),i.URL=r(121),i.WeakMap||(i.WeakMap=r(128)),i.WeakSet||(i.WeakSet=r(138)),String.prototype.codePointAt||r(140),String.fromCodePoint||(String.fromCodePoint=r(142)),i.Symbol||r(144),String.prototype.padStart||r(167),String.prototype.padEnd||r(172),Object.values||(Object.values=r(174))}},function(e,t,r){"use strict";e.exports="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:{}},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=function(){return"object"===("undefined"==typeof process?"undefined":n(process))&&process+""=="[object process]"&&!process.versions.nw&&!process.versions.electron}},function(e,t,r){r(6);var n=r(54);e.exports=n("String","startsWith")},function(e,t,r){"use strict";var n=r(7),i=r(43),a=r(49),o=r(17),s=r(53),u="".startsWith,c=Math.min;n({target:"String",proto:!0,forced:!s("startsWith")},{startsWith:function(e){var t=String(o(this));a(e);var r=i(c(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return u?u.call(t,n,r):t.slice(r,r+n.length)===n}})},function(e,t,r){var n=r(8),i=r(9).f,a=r(23),o=r(26),s=r(28),u=r(36),c=r(48);e.exports=function(e,t){var r,l,h,f,d,p=e.target,v=e.global,g=e.stat;if(r=v?n:g?n[p]||s(p,{}):(n[p]||{}).prototype)for(l in t){if(f=t[l],h=e.noTargetGet?(d=i(r,l))&&d.value:r[l],!c(v?l:p+(g?".":"#")+l,e.forced)&&void 0!==h){if(typeof f==typeof h)continue;u(f,h)}(e.sham||h&&h.sham)&&a(f,"sham",!0),o(r,l,f,e)}}},function(e,t){var r="object",n=function(e){return e&&e.Math==Math&&e};e.exports=n(typeof globalThis==r&&globalThis)||n(typeof window==r&&window)||n(typeof self==r&&self)||n(typeof global==r&&global)||Function("return this")()},function(e,t,r){var n=r(10),i=r(12),a=r(13),o=r(14),s=r(18),u=r(20),c=r(21),l=Object.getOwnPropertyDescriptor;t.f=n?l:function(e,t){if(e=o(e),t=s(t,!0),c)try{return l(e,t)}catch(e){}if(u(e,t))return a(!i.f.call(e,t),e[t])}},function(e,t,r){var n=r(11);e.exports=!n((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,a=i&&!n.call({1:2},1);t.f=a?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(15),i=r(17);e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(11),i=r(16),a="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a.call(e,""):Object(e)}:Object},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,r){var n=r(19);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(10),i=r(11),a=r(22);e.exports=!n&&!i((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(8),i=r(19),a=n.document,o=i(a)&&i(a.createElement);e.exports=function(e){return o?a.createElement(e):{}}},function(e,t,r){var n=r(10),i=r(24),a=r(13);e.exports=n?function(e,t,r){return i.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var n=r(10),i=r(21),a=r(25),o=r(18),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(a(e),t=o(t,!0),a(r),i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},function(e,t,r){var n=r(19);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,r){var n=r(8),i=r(27),a=r(23),o=r(20),s=r(28),u=r(30),c=r(31),l=c.get,h=c.enforce,f=String(u).split("toString");i("inspectSource",(function(e){return u.call(e)})),(e.exports=function(e,t,r,i){var u=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof r&&("string"!=typeof t||o(r,"name")||a(r,"name",t),h(r).source=f.join("string"==typeof t?t:"")),e!==n?(u?!l&&e[t]&&(c=!0):delete e[t],c?e[t]=r:a(e,t,r)):c?e[t]=r:s(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||u.call(this)}))},function(e,t,r){var n=r(8),i=r(28),a=r(29),o=n["__core-js_shared__"]||i("__core-js_shared__",{});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.2.1",mode:a?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t,r){var n=r(8),i=r(23);e.exports=function(e,t){try{i(n,e,t)}catch(r){n[e]=t}return t}},function(e,t){e.exports=!1},function(e,t,r){var n=r(27);e.exports=n("native-function-to-string",Function.toString)},function(e,t,r){var n,i,a,o=r(32),s=r(8),u=r(19),c=r(23),l=r(20),h=r(33),f=r(35),d=s.WeakMap;if(o){var p=new d,v=p.get,g=p.has,m=p.set;n=function(e,t){return m.call(p,e,t),t},i=function(e){return v.call(p,e)||{}},a=function(e){return g.call(p,e)}}else{var y=h("state");f[y]=!0,n=function(e,t){return c(e,y,t),t},i=function(e){return l(e,y)?e[y]:{}},a=function(e){return l(e,y)}}e.exports={set:n,get:i,has:a,enforce:function(e){return a(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!u(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t,r){var n=r(8),i=r(30),a=n.WeakMap;e.exports="function"==typeof a&&/native code/.test(i.call(a))},function(e,t,r){var n=r(27),i=r(34),a=n("keys");e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t){e.exports={}},function(e,t,r){var n=r(20),i=r(37),a=r(9),o=r(24);e.exports=function(e,t){for(var r=i(t),s=o.f,u=a.f,c=0;c<r.length;c++){var l=r[c];n(e,l)||s(e,l,u(t,l))}}},function(e,t,r){var n=r(38),i=r(40),a=r(47),o=r(25);e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(o(e)),r=a.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(39),i=r(8),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(n[e])||a(i[e]):n[e]&&n[e][t]||i[e]&&i[e][t]}},function(e,t,r){e.exports=r(8)},function(e,t,r){var n=r(41),i=r(46).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},function(e,t,r){var n=r(20),i=r(14),a=r(42).indexOf,o=r(35);e.exports=function(e,t){var r,s=i(e),u=0,c=[];for(r in s)!n(o,r)&&n(s,r)&&c.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~a(c,r)||c.push(r));return c}},function(e,t,r){var n=r(14),i=r(43),a=r(45),o=function(e){return function(t,r,o){var s,u=n(t),c=i(u.length),l=a(o,c);if(e&&r!=r){for(;c>l;)if((s=u[l++])!=s)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===r)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},function(e,t,r){var n=r(44),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(44),i=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?i(r+t,0):a(r,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(11),i=/#|\.prototype\./,a=function(e,t){var r=s[o(e)];return r==c||r!=u&&("function"==typeof t?n(t):!!t)},o=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",c=a.POLYFILL="P";e.exports=a},function(e,t,r){var n=r(50);e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,t,r){var n=r(19),i=r(16),a=r(51)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},function(e,t,r){var n=r(8),i=r(27),a=r(34),o=r(52),s=n.Symbol,u=i("wks");e.exports=function(e){return u[e]||(u[e]=o&&s[e]||(o?s:a)("Symbol."+e))}},function(e,t,r){var n=r(11);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(51)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(e){}}return!1}},function(e,t,r){var n=r(8),i=r(55),a=Function.call;e.exports=function(e,t,r){return i(a,n[e].prototype[t],r)}},function(e,t,r){var n=r(56);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){r(58);var n=r(54);e.exports=n("String","endsWith")},function(e,t,r){"use strict";var n=r(7),i=r(43),a=r(49),o=r(17),s=r(53),u="".endsWith,c=Math.min;n({target:"String",proto:!0,forced:!s("endsWith")},{endsWith:function(e){var t=String(o(this));a(e);var r=arguments.length>1?arguments[1]:void 0,n=i(t.length),s=void 0===r?n:c(i(r),n),l=String(e);return u?u.call(t,l,s):t.slice(s-l.length,s)===l}})},function(e,t,r){r(60);var n=r(54);e.exports=n("String","includes")},function(e,t,r){"use strict";var n=r(7),i=r(49),a=r(17);n({target:"String",proto:!0,forced:!r(53)("includes")},{includes:function(e){return!!~String(a(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(62);var n=r(54);e.exports=n("Array","includes")},function(e,t,r){"use strict";var n=r(7),i=r(42).includes,a=r(63);n({target:"Array",proto:!0},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},function(e,t,r){var n=r(51),i=r(64),a=r(23),o=n("unscopables"),s=Array.prototype;null==s[o]&&a(s,o,i(null)),e.exports=function(e){s[o][e]=!0}},function(e,t,r){var n=r(25),i=r(65),a=r(46),o=r(35),s=r(67),u=r(22),c=r(33)("IE_PROTO"),l=function(){},h=function(){var e,t=u("iframe"),r=a.length;for(t.style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),h=e.F;r--;)delete h.prototype[a[r]];return h()};e.exports=Object.create||function(e,t){var r;return null!==e?(l.prototype=n(e),r=new l,l.prototype=null,r[c]=e):r=h(),void 0===t?r:i(r,t)},o[c]=!0},function(e,t,r){var n=r(10),i=r(24),a=r(25),o=r(66);e.exports=n?Object.defineProperties:function(e,t){a(e);for(var r,n=o(t),s=n.length,u=0;s>u;)i.f(e,r=n[u++],t[r]);return e}},function(e,t,r){var n=r(41),i=r(46);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,r){var n=r(38);e.exports=n("document","documentElement")},function(e,t,r){r(69),r(81);var n=r(39);e.exports=n.Array.from},function(e,t,r){"use strict";var n=r(70).charAt,i=r(31),a=r(71),o=i.set,s=i.getterFor("String Iterator");a(String,"String",(function(e){o(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=s(this),r=t.string,i=t.index;return i>=r.length?{value:void 0,done:!0}:(e=n(r,i),t.index+=e.length,{value:e,done:!1})}))},function(e,t,r){var n=r(44),i=r(17),a=function(e){return function(t,r){var a,o,s=String(i(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(a=s.charCodeAt(u))<55296||a>56319||u+1===c||(o=s.charCodeAt(u+1))<56320||o>57343?e?s.charAt(u):a:e?s.slice(u,u+2):o-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,r){"use strict";var n=r(7),i=r(72),a=r(74),o=r(79),s=r(77),u=r(23),c=r(26),l=r(51),h=r(29),f=r(78),d=r(73),p=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,g=l("iterator"),m=function(){return this};e.exports=function(e,t,r,l,d,y,b){i(r,t,l);var _,A,S,w=function(e){if(e===d&&R)return R;if(!v&&e in C)return C[e];switch(e){case"keys":case"values":case"entries":return function(){return new r(this,e)}}return function(){return new r(this)}},k=t+" Iterator",x=!1,C=e.prototype,P=C[g]||C["@@iterator"]||d&&C[d],R=!v&&P||w(d),T="Array"==t&&C.entries||P;if(T&&(_=a(T.call(new e)),p!==Object.prototype&&_.next&&(h||a(_)===p||(o?o(_,p):"function"!=typeof _[g]&&u(_,g,m)),s(_,k,!0,!0),h&&(f[k]=m))),"values"==d&&P&&"values"!==P.name&&(x=!0,R=function(){return P.call(this)}),h&&!b||C[g]===R||u(C,g,R),f[t]=R,d)if(A={values:w("values"),keys:y?R:w("keys"),entries:w("entries")},b)for(S in A)!v&&!x&&S in C||c(C,S,A[S]);else n({target:t,proto:!0,forced:v||x},A);return A}},function(e,t,r){"use strict";var n=r(73).IteratorPrototype,i=r(64),a=r(13),o=r(77),s=r(78),u=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";return e.prototype=i(n,{next:a(1,r)}),o(e,c,!1,!0),s[c]=u,e}},function(e,t,r){"use strict";var n,i,a,o=r(74),s=r(23),u=r(20),c=r(51),l=r(29),h=c("iterator"),f=!1;[].keys&&("next"in(a=[].keys())?(i=o(o(a)))!==Object.prototype&&(n=i):f=!0),null==n&&(n={}),l||u(n,h)||s(n,h,(function(){return this})),e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:f}},function(e,t,r){var n=r(20),i=r(75),a=r(33),o=r(76),s=a("IE_PROTO"),u=Object.prototype;e.exports=o?Object.getPrototypeOf:function(e){return e=i(e),n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},function(e,t,r){var n=r(17);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(11);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},function(e,t,r){var n=r(24).f,i=r(20),a=r(51)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,a)&&n(e,a,{configurable:!0,value:t})}},function(e,t){e.exports={}},function(e,t,r){var n=r(25),i=r(80);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,a){return n(r),i(a),t?e.call(r,a):r.__proto__=a,r}}():void 0)},function(e,t,r){var n=r(19);e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,t,r){var n=r(7),i=r(82);n({target:"Array",stat:!0,forced:!r(88)((function(e){Array.from(e)}))},{from:i})},function(e,t,r){"use strict";var n=r(55),i=r(75),a=r(83),o=r(84),s=r(43),u=r(85),c=r(86);e.exports=function(e){var t,r,l,h,f=i(e),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,m=0,y=c(f);if(g&&(v=n(v,p>2?arguments[2]:void 0,2)),null==y||d==Array&&o(y))for(r=new d(t=s(f.length));t>m;m++)u(r,m,g?v(f[m],m):f[m]);else for(h=y.call(f),r=new d;!(l=h.next()).done;m++)u(r,m,g?a(h,v,[l.value,m],!0):l.value);return r.length=m,r}},function(e,t,r){var n=r(25);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var a=e.return;throw void 0!==a&&n(a.call(e)),t}}},function(e,t,r){var n=r(51),i=r(78),a=n("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[a]===e)}},function(e,t,r){"use strict";var n=r(18),i=r(24),a=r(13);e.exports=function(e,t,r){var o=n(t);o in e?i.f(e,o,a(0,r)):e[o]=r}},function(e,t,r){var n=r(87),i=r(78),a=r(51)("iterator");e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||i[n(e)]}},function(e,t,r){var n=r(16),i=r(51)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?r:a?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},function(e,t,r){var n=r(51)("iterator"),i=!1;try{var a=0,o={next:function(){return{done:!!a++}},return:function(){i=!0}};o[n]=function(){return this},Array.from(o,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var a={};a[n]=function(){return{next:function(){return{done:r=!0}}}},e(a)}catch(e){}return r}},function(e,t,r){r(90);var n=r(39);e.exports=n.Object.assign},function(e,t,r){var n=r(7),i=r(91);n({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(e,t,r){"use strict";var n=r(10),i=r(11),a=r(66),o=r(47),s=r(12),u=r(75),c=r(15),l=Object.assign;e.exports=!l||i((function(){var e={},t={},r=Symbol();return e[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=l({},e)[r]||"abcdefghijklmnopqrst"!=a(l({},t)).join("")}))?function(e,t){for(var r=u(e),i=arguments.length,l=1,h=o.f,f=s.f;i>l;)for(var d,p=c(arguments[l++]),v=h?a(p).concat(h(p)):a(p),g=v.length,m=0;g>m;)d=v[m++],n&&!f.call(p,d)||(r[d]=p[d]);return r}:l},function(e,t,r){r(93);var n=r(39);e.exports=n.Math.log2},function(e,t,r){var n=r(7),i=Math.log,a=Math.LN2;n({target:"Math",stat:!0},{log2:function(e){return i(e)/a}})},function(e,t,r){r(95);var n=r(39);e.exports=n.Number.isNaN},function(e,t,r){r(7)({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},function(e,t,r){r(97);var n=r(39);e.exports=n.Number.isInteger},function(e,t,r){r(7)({target:"Number",stat:!0},{isInteger:r(98)})},function(e,t,r){var n=r(19),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},function(e,t,r){r(100),r(69),r(102),r(105),r(119),r(120);var n=r(39);e.exports=n.Promise},function(e,t,r){var n=r(26),i=r(101),a=Object.prototype;i!==a.toString&&n(a,"toString",i,{unsafe:!0})},function(e,t,r){"use strict";var n=r(87),i={};i[r(51)("toStringTag")]="z",e.exports="[object z]"!==String(i)?function(){return"[object "+n(this)+"]"}:i.toString},function(e,t,r){var n=r(8),i=r(103),a=r(104),o=r(23),s=r(51),u=s("iterator"),c=s("toStringTag"),l=a.values;for(var h in i){var f=n[h],d=f&&f.prototype;if(d){if(d[u]!==l)try{o(d,u,l)}catch(e){d[u]=l}if(d[c]||o(d,c,h),i[h])for(var p in a)if(d[p]!==a[p])try{o(d,p,a[p])}catch(e){d[p]=a[p]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){"use strict";var n=r(14),i=r(63),a=r(78),o=r(31),s=r(71),u=o.set,c=o.getterFor("Array Iterator");e.exports=s(Array,"Array",(function(e,t){u(this,{type:"Array Iterator",target:n(e),index:0,kind:t})}),(function(){var e=c(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),a.Arguments=a.Array,i("keys"),i("values"),i("entries")},function(e,t,r){"use strict";var n,i,a,o,s=r(7),u=r(29),c=r(8),l=r(39),h=r(106),f=r(26),d=r(107),p=r(77),v=r(108),g=r(19),m=r(56),y=r(109),b=r(16),_=r(110),A=r(88),S=r(111),w=r(112).set,k=r(113),x=r(115),C=r(117),P=r(116),R=r(118),T=r(114),E=r(31),O=r(48),L=r(51)("species"),F="Promise",I=E.get,j=E.set,M=E.getterFor(F),N=h,D=c.TypeError,q=c.document,U=c.process,W=c.fetch,B=U&&U.versions,z=B&&B.v8||"",G=P.f,H=G,X="process"==b(U),Y=!!(q&&q.createEvent&&c.dispatchEvent),V=O(F,(function(){var e=N.resolve(1),t=function(){},r=(e.constructor={})[L]=function(e){e(t,t)};return!((X||"function"==typeof PromiseRejectionEvent)&&(!u||e.finally)&&e.then(t)instanceof r&&0!==z.indexOf("6.6")&&-1===T.indexOf("Chrome/66"))})),Q=V||!A((function(e){N.all(e).catch((function(){}))})),K=function(e){var t;return!(!g(e)||"function"!=typeof(t=e.then))&&t},J=function(e,t,r){if(!t.notified){t.notified=!0;var n=t.reactions;k((function(){for(var i=t.value,a=1==t.state,o=0;n.length>o;){var s,u,c,l=n[o++],h=a?l.ok:l.fail,f=l.resolve,d=l.reject,p=l.domain;try{h?(a||(2===t.rejection&&te(e,t),t.rejection=1),!0===h?s=i:(p&&p.enter(),s=h(i),p&&(p.exit(),c=!0)),s===l.promise?d(D("Promise-chain cycle")):(u=K(s))?u.call(s,f,d):f(s)):d(i)}catch(e){p&&!c&&p.exit(),d(e)}}t.reactions=[],t.notified=!1,r&&!t.rejection&&$(e,t)}))}},Z=function(e,t,r){var n,i;Y?((n=q.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),c.dispatchEvent(n)):n={promise:t,reason:r},(i=c["on"+e])?i(n):"unhandledrejection"===e&&C("Unhandled promise rejection",r)},$=function(e,t){w.call(c,(function(){var r,n=t.value;if(ee(t)&&(r=R((function(){X?U.emit("unhandledRejection",n,e):Z("unhandledrejection",e,n)})),t.rejection=X||ee(t)?2:1,r.error))throw r.value}))},ee=function(e){return 1!==e.rejection&&!e.parent},te=function(e,t){w.call(c,(function(){X?U.emit("rejectionHandled",e):Z("rejectionhandled",e,t.value)}))},re=function(e,t,r,n){return function(i){e(t,r,i,n)}},ne=function(e,t,r,n){t.done||(t.done=!0,n&&(t=n),t.value=r,t.state=2,J(e,t,!0))},ie=function(e,t,r,n){if(!t.done){t.done=!0,n&&(t=n);try{if(e===r)throw D("Promise can't be resolved itself");var i=K(r);i?k((function(){var n={done:!1};try{i.call(r,re(ie,e,n,t),re(ne,e,n,t))}catch(r){ne(e,n,r,t)}})):(t.value=r,t.state=1,J(e,t,!1))}catch(r){ne(e,{done:!1},r,t)}}};V&&(N=function(e){y(this,N,F),m(e),n.call(this);var t=I(this);try{e(re(ie,this,t),re(ne,this,t))}catch(e){ne(this,t,e)}},(n=function(e){j(this,{type:F,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=d(N.prototype,{then:function(e,t){var r=M(this),n=G(S(this,N));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=X?U.domain:void 0,r.parent=!0,r.reactions.push(n),0!=r.state&&J(this,r,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new n,t=I(e);this.promise=e,this.resolve=re(ie,e,t),this.reject=re(ne,e,t)},P.f=G=function(e){return e===N||e===a?new i(e):H(e)},u||"function"!=typeof h||(o=h.prototype.then,f(h.prototype,"then",(function(e,t){var r=this;return new N((function(e,t){o.call(r,e,t)})).then(e,t)})),"function"==typeof W&&s({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return x(N,W.apply(c,arguments))}}))),s({global:!0,wrap:!0,forced:V},{Promise:N}),p(N,F,!1,!0),v(F),a=l.Promise,s({target:F,stat:!0,forced:V},{reject:function(e){var t=G(this);return t.reject.call(void 0,e),t.promise}}),s({target:F,stat:!0,forced:u||V},{resolve:function(e){return x(u&&this===a?N:this,e)}}),s({target:F,stat:!0,forced:Q},{all:function(e){var t=this,r=G(t),n=r.resolve,i=r.reject,a=R((function(){var r=m(t.resolve),a=[],o=0,s=1;_(e,(function(e){var u=o++,c=!1;a.push(void 0),s++,r.call(t,e).then((function(e){c||(c=!0,a[u]=e,--s||n(a))}),i)})),--s||n(a)}));return a.error&&i(a.value),r.promise},race:function(e){var t=this,r=G(t),n=r.reject,i=R((function(){var i=m(t.resolve);_(e,(function(e){i.call(t,e).then(r.resolve,n)}))}));return i.error&&n(i.value),r.promise}})},function(e,t,r){var n=r(8);e.exports=n.Promise},function(e,t,r){var n=r(26);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},function(e,t,r){"use strict";var n=r(38),i=r(24),a=r(51),o=r(10),s=a("species");e.exports=function(e){var t=n(e),r=i.f;o&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){var n=r(25),i=r(84),a=r(43),o=r(55),s=r(86),u=r(83),c=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,t,r,l,h){var f,d,p,v,g,m,y=o(t,r,l?2:1);if(h)f=e;else{if("function"!=typeof(d=s(e)))throw TypeError("Target is not iterable");if(i(d)){for(p=0,v=a(e.length);v>p;p++)if((g=l?y(n(m=e[p])[0],m[1]):y(e[p]))&&g instanceof c)return g;return new c(!1)}f=d.call(e)}for(;!(m=f.next()).done;)if((g=u(f,y,m.value,l))&&g instanceof c)return g;return new c(!1)}).stop=function(e){return new c(!0,e)}},function(e,t,r){var n=r(25),i=r(56),a=r(51)("species");e.exports=function(e,t){var r,o=n(e).constructor;return void 0===o||null==(r=n(o)[a])?t:i(r)}},function(e,t,r){var n,i,a,o=r(8),s=r(11),u=r(16),c=r(55),l=r(67),h=r(22),f=o.location,d=o.setImmediate,p=o.clearImmediate,v=o.process,g=o.MessageChannel,m=o.Dispatch,y=0,b={},_=function(e){if(b.hasOwnProperty(e)){var t=b[e];delete b[e],t()}},A=function(e){return function(){_(e)}},S=function(e){_(e.data)},w=function(e){o.postMessage(e+"",f.protocol+"//"+f.host)};d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return b[++y]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},n(y),y},p=function(e){delete b[e]},"process"==u(v)?n=function(e){v.nextTick(A(e))}:m&&m.now?n=function(e){m.now(A(e))}:g?(a=(i=new g).port2,i.port1.onmessage=S,n=c(a.postMessage,a,1)):!o.addEventListener||"function"!=typeof postMessage||o.importScripts||s(w)?n="onreadystatechange"in h("script")?function(e){l.appendChild(h("script")).onreadystatechange=function(){l.removeChild(this),_(e)}}:function(e){setTimeout(A(e),0)}:(n=w,o.addEventListener("message",S,!1))),e.exports={set:d,clear:p}},function(e,t,r){var n,i,a,o,s,u,c,l,h=r(8),f=r(9).f,d=r(16),p=r(112).set,v=r(114),g=h.MutationObserver||h.WebKitMutationObserver,m=h.process,y=h.Promise,b="process"==d(m),_=f(h,"queueMicrotask"),A=_&&_.value;A||(n=function(){var e,t;for(b&&(e=m.domain)&&e.exit();i;){t=i.fn,i=i.next;try{t()}catch(e){throw i?o():a=void 0,e}}a=void 0,e&&e.enter()},b?o=function(){m.nextTick(n)}:g&&!/(iphone|ipod|ipad).*applewebkit/i.test(v)?(s=!0,u=document.createTextNode(""),new g(n).observe(u,{characterData:!0}),o=function(){u.data=s=!s}):y&&y.resolve?(c=y.resolve(void 0),l=c.then,o=function(){l.call(c,n)}):o=function(){p.call(h,n)}),e.exports=A||function(e){var t={fn:e,next:void 0};a&&(a.next=t),i||(i=t,o()),a=t}},function(e,t,r){var n=r(38);e.exports=n("navigator","userAgent")||""},function(e,t,r){var n=r(25),i=r(19),a=r(116);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=a.f(e);return(0,r.resolve)(t),r.promise}},function(e,t,r){"use strict";var n=r(56),i=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n})),this.resolve=n(t),this.reject=n(r)};e.exports.f=function(e){return new i(e)}},function(e,t,r){var n=r(8);e.exports=function(e,t){var r=n.console;r&&r.error&&(1===arguments.length?r.error(e):r.error(e,t))}},function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}}},function(e,t,r){"use strict";var n=r(7),i=r(56),a=r(116),o=r(118),s=r(110);n({target:"Promise",stat:!0},{allSettled:function(e){var t=this,r=a.f(t),n=r.resolve,u=r.reject,c=o((function(){var r=i(t.resolve),a=[],o=0,u=1;s(e,(function(e){var i=o++,s=!1;a.push(void 0),u++,r.call(t,e).then((function(e){s||(s=!0,a[i]={status:"fulfilled",value:e},--u||n(a))}),(function(e){s||(s=!0,a[i]={status:"rejected",reason:e},--u||n(a))}))})),--u||n(a)}));return c.error&&u(c.value),r.promise}})},function(e,t,r){"use strict";var n=r(7),i=r(29),a=r(106),o=r(38),s=r(111),u=r(115),c=r(26);n({target:"Promise",proto:!0,real:!0},{finally:function(e){var t=s(this,o("Promise")),r="function"==typeof e;return this.then(r?function(r){return u(t,e()).then((function(){return r}))}:e,r?function(r){return u(t,e()).then((function(){throw r}))}:e)}}),i||"function"!=typeof a||a.prototype.finally||c(a.prototype,"finally",o("Promise").prototype.finally)},function(e,t,r){r(122),r(127),r(125);var n=r(39);e.exports=n.URL},function(e,t,r){"use strict";r(69);var n,i=r(7),a=r(10),o=r(123),s=r(8),u=r(65),c=r(26),l=r(109),h=r(20),f=r(91),d=r(82),p=r(70).codeAt,v=r(124),g=r(77),m=r(125),y=r(31),b=s.URL,_=m.URLSearchParams,A=m.getState,S=y.set,w=y.getterFor("URL"),k=Math.floor,x=Math.pow,C=/[A-Za-z]/,P=/[\d+\-.A-Za-z]/,R=/\d/,T=/^(0x|0X)/,E=/^[0-7]+$/,O=/^\d+$/,L=/^[\dA-Fa-f]+$/,F=/[\u0000\u0009\u000A\u000D #%\/:?@[\\]]/,I=/[\u0000\u0009\u000A\u000D #\/:?@[\\]]/,j=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,M=/[\u0009\u000A\u000D]/g,N=function(e,t){var r,n,i;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(r=q(t.slice(1,-1))))return"Invalid host";e.host=r}else if(Y(e)){if(t=v(t),F.test(t))return"Invalid host";if(null===(r=D(t)))return"Invalid host";e.host=r}else{if(I.test(t))return"Invalid host";for(r="",n=d(t),i=0;i<n.length;i++)r+=H(n[i],W);e.host=r}},D=function(e){var t,r,n,i,a,o,s,u=e.split(".");if(u.length&&""==u[u.length-1]&&u.pop(),(t=u.length)>4)return e;for(r=[],n=0;n<t;n++){if(""==(i=u[n]))return e;if(a=10,i.length>1&&"0"==i.charAt(0)&&(a=T.test(i)?16:8,i=i.slice(8==a?1:2)),""===i)o=0;else{if(!(10==a?O:8==a?E:L).test(i))return e;o=parseInt(i,a)}r.push(o)}for(n=0;n<t;n++)if(o=r[n],n==t-1){if(o>=x(256,5-t))return null}else if(o>255)return null;for(s=r.pop(),n=0;n<r.length;n++)s+=r[n]*x(256,3-n);return s},q=function(e){var t,r,n,i,a,o,s,u=[0,0,0,0,0,0,0,0],c=0,l=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,l=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=r=0;r<4&&L.test(f());)t=16*t+parseInt(f(),16),h++,r++;if("."==f()){if(0==r)return;if(h-=r,c>6)return;for(n=0;f();){if(i=null,n>0){if(!("."==f()&&n<4))return;h++}if(!R.test(f()))return;for(;R.test(f());){if(a=parseInt(f(),10),null===i)i=a;else{if(0==i)return;i=10*i+a}if(i>255)return;h++}u[c]=256*u[c]+i,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;u[c++]=t}else{if(null!==l)return;h++,l=++c}}if(null!==l)for(o=c-l,c=7;0!=c&&o>0;)s=u[c],u[c--]=u[l+o-1],u[l+--o]=s;else if(8!=c)return;return u},U=function(e){var t,r,n,i;if("number"==typeof e){for(t=[],r=0;r<4;r++)t.unshift(e%256),e=k(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,r=1,n=null,i=0,a=0;a<8;a++)0!==e[a]?(i>r&&(t=n,r=i),n=null,i=0):(null===n&&(n=a),++i);return i>r&&(t=n,r=i),t}(e),r=0;r<8;r++)i&&0===e[r]||(i&&(i=!1),n===r?(t+=r?":":"::",i=!0):(t+=e[r].toString(16),r<7&&(t+=":")));return"["+t+"]"}return e},W={},B=f({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),z=f({},B,{"#":1,"?":1,"{":1,"}":1}),G=f({},z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),H=function(e,t){var r=p(e,0);return r>32&&r<127&&!h(t,e)?e:encodeURIComponent(e)},X={ftp:21,file:null,gopher:70,http:80,https:443,ws:80,wss:443},Y=function(e){return h(X,e.scheme)},V=function(e){return""!=e.username||""!=e.password},Q=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},K=function(e,t){var r;return 2==e.length&&C.test(e.charAt(0))&&(":"==(r=e.charAt(1))||!t&&"|"==r)},J=function(e){var t;return e.length>1&&K(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Z=function(e){var t=e.path,r=t.length;!r||"file"==e.scheme&&1==r&&K(t[0],!0)||t.pop()},$=function(e){return"."===e||"%2e"===e.toLowerCase()},ee={},te={},re={},ne={},ie={},ae={},oe={},se={},ue={},ce={},le={},he={},fe={},de={},pe={},ve={},ge={},me={},ye={},be={},_e={},Ae=function(e,t,r,i){var a,o,s,u,c,l=r||ee,f=0,p="",v=!1,g=!1,m=!1;for(r||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(j,"")),t=t.replace(M,""),a=d(t);f<=a.length;){switch(o=a[f],l){case ee:if(!o||!C.test(o)){if(r)return"Invalid scheme";l=re;continue}p+=o.toLowerCase(),l=te;break;case te:if(o&&(P.test(o)||"+"==o||"-"==o||"."==o))p+=o.toLowerCase();else{if(":"!=o){if(r)return"Invalid scheme";p="",l=re,f=0;continue}if(r&&(Y(e)!=h(X,p)||"file"==p&&(V(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=p,r)return void(Y(e)&&X[e.scheme]==e.port&&(e.port=null));p="","file"==e.scheme?l=de:Y(e)&&i&&i.scheme==e.scheme?l=ne:Y(e)?l=se:"/"==a[f+1]?(l=ie,f++):(e.cannotBeABaseURL=!0,e.path.push(""),l=ye)}break;case re:if(!i||i.cannotBeABaseURL&&"#"!=o)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==o){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,l=_e;break}l="file"==i.scheme?de:ae;continue;case ne:if("/"!=o||"/"!=a[f+1]){l=ae;continue}l=ue,f++;break;case ie:if("/"==o){l=ce;break}l=me;continue;case ae:if(e.scheme=i.scheme,o==n)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==o||"\\"==o&&Y(e))l=oe;else if("?"==o)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",l=be;else{if("#"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),l=me;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",l=_e}break;case oe:if(!Y(e)||"/"!=o&&"\\"!=o){if("/"!=o){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,l=me;continue}l=ce}else l=ue;break;case se:if(l=ue,"/"!=o||"/"!=p.charAt(f+1))continue;f++;break;case ue:if("/"!=o&&"\\"!=o){l=ce;continue}break;case ce:if("@"==o){v&&(p="%40"+p),v=!0,s=d(p);for(var y=0;y<s.length;y++){var b=s[y];if(":"!=b||m){var _=H(b,G);m?e.password+=_:e.username+=_}else m=!0}p=""}else if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)){if(v&&""==p)return"Invalid authority";f-=d(p).length+1,p="",l=le}else p+=o;break;case le:case he:if(r&&"file"==e.scheme){l=ve;continue}if(":"!=o||g){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)){if(Y(e)&&""==p)return"Invalid host";if(r&&""==p&&(V(e)||null!==e.port))return;if(u=N(e,p))return u;if(p="",l=ge,r)return;continue}"["==o?g=!0:"]"==o&&(g=!1),p+=o}else{if(""==p)return"Invalid host";if(u=N(e,p))return u;if(p="",l=fe,r==he)return}break;case fe:if(!R.test(o)){if(o==n||"/"==o||"?"==o||"#"==o||"\\"==o&&Y(e)||r){if(""!=p){var A=parseInt(p,10);if(A>65535)return"Invalid port";e.port=Y(e)&&A===X[e.scheme]?null:A,p=""}if(r)return;l=ge;continue}return"Invalid port"}p+=o;break;case de:if(e.scheme="file","/"==o||"\\"==o)l=pe;else{if(!i||"file"!=i.scheme){l=me;continue}if(o==n)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==o)e.host=i.host,e.path=i.path.slice(),e.query="",l=be;else{if("#"!=o){J(a.slice(f).join(""))||(e.host=i.host,e.path=i.path.slice(),Z(e)),l=me;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",l=_e}}break;case pe:if("/"==o||"\\"==o){l=ve;break}i&&"file"==i.scheme&&!J(a.slice(f).join(""))&&(K(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),l=me;continue;case ve:if(o==n||"/"==o||"\\"==o||"?"==o||"#"==o){if(!r&&K(p))l=me;else if(""==p){if(e.host="",r)return;l=ge}else{if(u=N(e,p))return u;if("localhost"==e.host&&(e.host=""),r)return;p="",l=ge}continue}p+=o;break;case ge:if(Y(e)){if(l=me,"/"!=o&&"\\"!=o)continue}else if(r||"?"!=o)if(r||"#"!=o){if(o!=n&&(l=me,"/"!=o))continue}else e.fragment="",l=_e;else e.query="",l=be;break;case me:if(o==n||"/"==o||"\\"==o&&Y(e)||!r&&("?"==o||"#"==o)){if(".."===(c=(c=p).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(Z(e),"/"==o||"\\"==o&&Y(e)||e.path.push("")):$(p)?"/"==o||"\\"==o&&Y(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&K(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(o==n||"?"==o||"#"==o))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==o?(e.query="",l=be):"#"==o&&(e.fragment="",l=_e)}else p+=H(o,z);break;case ye:"?"==o?(e.query="",l=be):"#"==o?(e.fragment="",l=_e):o!=n&&(e.path[0]+=H(o,W));break;case be:r||"#"!=o?o!=n&&("'"==o&&Y(e)?e.query+="%27":e.query+="#"==o?"%23":H(o,W)):(e.fragment="",l=_e);break;case _e:o!=n&&(e.fragment+=H(o,B))}f++}},Se=function(e){var t,r,n=l(this,Se,"URL"),i=arguments.length>1?arguments[1]:void 0,o=String(e),s=S(n,{type:"URL"});if(void 0!==i)if(i instanceof Se)t=w(i);else if(r=Ae(t={},String(i)))throw TypeError(r);if(r=Ae(s,o,null,t))throw TypeError(r);var u=s.searchParams=new _,c=A(u);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(u)||null},a||(n.href=ke.call(n),n.origin=xe.call(n),n.protocol=Ce.call(n),n.username=Pe.call(n),n.password=Re.call(n),n.host=Te.call(n),n.hostname=Ee.call(n),n.port=Oe.call(n),n.pathname=Le.call(n),n.search=Fe.call(n),n.searchParams=Ie.call(n),n.hash=je.call(n))},we=Se.prototype,ke=function(){var e=w(this),t=e.scheme,r=e.username,n=e.password,i=e.host,a=e.port,o=e.path,s=e.query,u=e.fragment,c=t+":";return null!==i?(c+="//",V(e)&&(c+=r+(n?":"+n:"")+"@"),c+=U(i),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==u&&(c+="#"+u),c},xe=function(){var e=w(this),t=e.scheme,r=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&Y(e)?t+"://"+U(e.host)+(null!==r?":"+r:""):"null"},Ce=function(){return w(this).scheme+":"},Pe=function(){return w(this).username},Re=function(){return w(this).password},Te=function(){var e=w(this),t=e.host,r=e.port;return null===t?"":null===r?U(t):U(t)+":"+r},Ee=function(){var e=w(this).host;return null===e?"":U(e)},Oe=function(){var e=w(this).port;return null===e?"":String(e)},Le=function(){var e=w(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},Fe=function(){var e=w(this).query;return e?"?"+e:""},Ie=function(){return w(this).searchParams},je=function(){var e=w(this).fragment;return e?"#"+e:""},Me=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&u(we,{href:Me(ke,(function(e){var t=w(this),r=String(e),n=Ae(t,r);if(n)throw TypeError(n);A(t.searchParams).updateSearchParams(t.query)})),origin:Me(xe),protocol:Me(Ce,(function(e){var t=w(this);Ae(t,String(e)+":",ee)})),username:Me(Pe,(function(e){var t=w(this),r=d(String(e));if(!Q(t)){t.username="";for(var n=0;n<r.length;n++)t.username+=H(r[n],G)}})),password:Me(Re,(function(e){var t=w(this),r=d(String(e));if(!Q(t)){t.password="";for(var n=0;n<r.length;n++)t.password+=H(r[n],G)}})),host:Me(Te,(function(e){var t=w(this);t.cannotBeABaseURL||Ae(t,String(e),le)})),hostname:Me(Ee,(function(e){var t=w(this);t.cannotBeABaseURL||Ae(t,String(e),he)})),port:Me(Oe,(function(e){var t=w(this);Q(t)||(""==(e=String(e))?t.port=null:Ae(t,e,fe))})),pathname:Me(Le,(function(e){var t=w(this);t.cannotBeABaseURL||(t.path=[],Ae(t,e+"",ge))})),search:Me(Fe,(function(e){var t=w(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ae(t,e,be)),A(t.searchParams).updateSearchParams(t.query)})),searchParams:Me(Ie),hash:Me(je,(function(e){var t=w(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ae(t,e,_e)):t.fragment=null}))}),c(we,"toJSON",(function(){return ke.call(this)}),{enumerable:!0}),c(we,"toString",(function(){return ke.call(this)}),{enumerable:!0}),b){var Ne=b.createObjectURL,De=b.revokeObjectURL;Ne&&c(Se,"createObjectURL",(function(e){return Ne.apply(b,arguments)})),De&&c(Se,"revokeObjectURL",(function(e){return De.apply(b,arguments)}))}g(Se,"URL"),i({global:!0,forced:!o,sham:!a},{URL:Se})},function(e,t,r){var n=r(11),i=r(51),a=r(29),o=i("iterator");e.exports=!n((function(){var e=new URL("b?e=1","http://a"),t=e.searchParams;return e.pathname="c%20d",a&&!e.toJSON||!t.sort||"http://a/c%20d?e=1"!==e.href||"1"!==t.get("e")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash}))},function(e,t,r){"use strict";var n=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,a="Overflow: input needs wider integers to process",o=Math.floor,s=String.fromCharCode,u=function(e){return e+22+75*(e<26)},c=function(e,t,r){var n=0;for(e=r?o(e/700):e>>1,e+=o(e/t);e>455;n+=36)e=o(e/35);return o(n+36*e/(e+38))},l=function(e){var t,r,n=[],i=(e=function(e){for(var t=[],r=0,n=e.length;r<n;){var i=e.charCodeAt(r++);if(i>=55296&&i<=56319&&r<n){var a=e.charCodeAt(r++);56320==(64512&a)?t.push(((1023&i)<<10)+(1023&a)+65536):(t.push(i),r--)}else t.push(i)}return t}(e)).length,l=128,h=0,f=72;for(t=0;t<e.length;t++)(r=e[t])<128&&n.push(s(r));var d=n.length,p=d;for(d&&n.push("-");p<i;){var v=2147483647;for(t=0;t<e.length;t++)(r=e[t])>=l&&r<v&&(v=r);var g=p+1;if(v-l>o((2147483647-h)/g))throw RangeError(a);for(h+=(v-l)*g,l=v,t=0;t<e.length;t++){if((r=e[t])<l&&++h>2147483647)throw RangeError(a);if(r==l){for(var m=h,y=36;;y+=36){var b=y<=f?1:y>=f+26?26:y-f;if(m<b)break;var _=m-b,A=36-b;n.push(s(u(b+_%A))),m=o(_/A)}n.push(s(u(m))),f=c(h,g,p==d),h=0,++p}}++h,++l}return n.join("")};e.exports=function(e){var t,r,a=[],o=e.toLowerCase().replace(i,".").split(".");for(t=0;t<o.length;t++)r=o[t],a.push(n.test(r)?"xn--"+l(r):r);return a.join(".")}},function(e,t,r){"use strict";r(104);var n=r(7),i=r(123),a=r(26),o=r(107),s=r(77),u=r(72),c=r(31),l=r(109),h=r(20),f=r(55),d=r(25),p=r(19),v=r(126),g=r(86),m=r(51)("iterator"),y=c.set,b=c.getterFor("URLSearchParams"),_=c.getterFor("URLSearchParamsIterator"),A=/\+/g,S=Array(4),w=function(e){return S[e-1]||(S[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},k=function(e){try{return decodeURIComponent(e)}catch(t){return e}},x=function(e){var t=e.replace(A," "),r=4;try{return decodeURIComponent(t)}catch(e){for(;r;)t=t.replace(w(r--),k);return t}},C=/[!'()~]|%20/g,P={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},R=function(e){return P[e]},T=function(e){return encodeURIComponent(e).replace(C,R)},E=function(e,t){if(t)for(var r,n,i=t.split("&"),a=0;a<i.length;)(r=i[a++]).length&&(n=r.split("="),e.push({key:x(n.shift()),value:x(n.join("="))}))},O=function(e){this.entries.length=0,E(this.entries,e)},L=function(e,t){if(e<t)throw TypeError("Not enough arguments")},F=u((function(e,t){y(this,{type:"URLSearchParamsIterator",iterator:v(b(e).entries),kind:t})}),"Iterator",(function(){var e=_(this),t=e.kind,r=e.iterator.next(),n=r.value;return r.done||(r.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),r})),I=function(){l(this,I,"URLSearchParams");var e,t,r,n,i,a,o,s=arguments.length>0?arguments[0]:void 0,u=this,c=[];if(y(u,{type:"URLSearchParams",entries:c,updateURL:function(){},updateSearchParams:O}),void 0!==s)if(p(s))if("function"==typeof(e=g(s)))for(t=e.call(s);!(r=t.next()).done;){if((i=(n=v(d(r.value))).next()).done||(a=n.next()).done||!n.next().done)throw TypeError("Expected sequence with length 2");c.push({key:i.value+"",value:a.value+""})}else for(o in s)h(s,o)&&c.push({key:o,value:s[o]+""});else E(c,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},j=I.prototype;o(j,{append:function(e,t){L(arguments.length,2);var r=b(this);r.entries.push({key:e+"",value:t+""}),r.updateURL()},delete:function(e){L(arguments.length,1);for(var t=b(this),r=t.entries,n=e+"",i=0;i<r.length;)r[i].key===n?r.splice(i,1):i++;t.updateURL()},get:function(e){L(arguments.length,1);for(var t=b(this).entries,r=e+"",n=0;n<t.length;n++)if(t[n].key===r)return t[n].value;return null},getAll:function(e){L(arguments.length,1);for(var t=b(this).entries,r=e+"",n=[],i=0;i<t.length;i++)t[i].key===r&&n.push(t[i].value);return n},has:function(e){L(arguments.length,1);for(var t=b(this).entries,r=e+"",n=0;n<t.length;)if(t[n++].key===r)return!0;return!1},set:function(e,t){L(arguments.length,1);for(var r,n=b(this),i=n.entries,a=!1,o=e+"",s=t+"",u=0;u<i.length;u++)(r=i[u]).key===o&&(a?i.splice(u--,1):(a=!0,r.value=s));a||i.push({key:o,value:s}),n.updateURL()},sort:function(){var e,t,r,n=b(this),i=n.entries,a=i.slice();for(i.length=0,r=0;r<a.length;r++){for(e=a[r],t=0;t<r;t++)if(i[t].key>e.key){i.splice(t,0,e);break}t===r&&i.push(e)}n.updateURL()},forEach:function(e){for(var t,r=b(this).entries,n=f(e,arguments.length>1?arguments[1]:void 0,3),i=0;i<r.length;)n((t=r[i++]).value,t.key,this)},keys:function(){return new F(this,"keys")},values:function(){return new F(this,"values")},entries:function(){return new F(this,"entries")}},{enumerable:!0}),a(j,m,j.entries),a(j,"toString",(function(){for(var e,t=b(this).entries,r=[],n=0;n<t.length;)e=t[n++],r.push(T(e.key)+"="+T(e.value));return r.join("&")}),{enumerable:!0}),s(I,"URLSearchParams"),n({global:!0,forced:!i},{URLSearchParams:I}),e.exports={URLSearchParams:I,getState:b}},function(e,t,r){var n=r(25),i=r(86);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,r){"use strict";r(7)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,r){r(100),r(129),r(102);var n=r(39);e.exports=n.WeakMap},function(e,t,r){"use strict";var n,i=r(8),a=r(107),o=r(130),s=r(132),u=r(134),c=r(19),l=r(31).enforce,h=r(32),f=!i.ActiveXObject&&"ActiveXObject"in i,d=Object.isExtensible,p=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},v=e.exports=s("WeakMap",p,u,!0,!0);if(h&&f){n=u.getConstructor(p,"WeakMap",!0),o.REQUIRED=!0;var g=v.prototype,m=g.delete,y=g.has,b=g.get,_=g.set;a(g,{delete:function(e){if(c(e)&&!d(e)){var t=l(this);return t.frozen||(t.frozen=new n),m.call(this,e)||t.frozen.delete(e)}return m.call(this,e)},has:function(e){if(c(e)&&!d(e)){var t=l(this);return t.frozen||(t.frozen=new n),y.call(this,e)||t.frozen.has(e)}return y.call(this,e)},get:function(e){if(c(e)&&!d(e)){var t=l(this);return t.frozen||(t.frozen=new n),y.call(this,e)?b.call(this,e):t.frozen.get(e)}return b.call(this,e)},set:function(e,t){if(c(e)&&!d(e)){var r=l(this);r.frozen||(r.frozen=new n),y.call(this,e)?_.call(this,e,t):r.frozen.set(e,t)}else _.call(this,e,t);return this}})}},function(e,t,r){var n=r(35),i=r(19),a=r(20),o=r(24).f,s=r(34),u=r(131),c=s("meta"),l=0,h=Object.isExtensible||function(){return!0},f=function(e){o(e,c,{value:{objectID:"O"+ ++l,weakData:{}}})},d=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!h(e))return"F";if(!t)return"E";f(e)}return e[c].objectID},getWeakData:function(e,t){if(!a(e,c)){if(!h(e))return!0;if(!t)return!1;f(e)}return e[c].weakData},onFreeze:function(e){return u&&d.REQUIRED&&h(e)&&!a(e,c)&&f(e),e}};n[c]=!0},function(e,t,r){var n=r(11);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t,r){"use strict";var n=r(7),i=r(8),a=r(48),o=r(26),s=r(130),u=r(110),c=r(109),l=r(19),h=r(11),f=r(88),d=r(77),p=r(133);e.exports=function(e,t,r,v,g){var m=i[e],y=m&&m.prototype,b=m,_=v?"set":"add",A={},S=function(e){var t=y[e];o(y,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!l(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!l(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!l(e))&&t.call(this,0===e?0:e)}:function(e,r){return t.call(this,0===e?0:e,r),this})};if(a(e,"function"!=typeof m||!(g||y.forEach&&!h((function(){(new m).entries().next()})))))b=r.getConstructor(t,e,v,_),s.REQUIRED=!0;else if(a(e,!0)){var w=new b,k=w[_](g?{}:-0,1)!=w,x=h((function(){w.has(1)})),C=f((function(e){new m(e)})),P=!g&&h((function(){for(var e=new m,t=5;t--;)e[_](t,t);return!e.has(-0)}));C||((b=t((function(t,r){c(t,b,e);var n=p(new m,t,b);return null!=r&&u(r,n[_],n,v),n}))).prototype=y,y.constructor=b),(x||P)&&(S("delete"),S("has"),v&&S("get")),(P||k)&&S(_),g&&y.clear&&delete y.clear}return A[e]=b,n({global:!0,forced:b!=m},A),d(b,e),g||r.setStrong(b,e,v),b}},function(e,t,r){var n=r(19),i=r(79);e.exports=function(e,t,r){var a,o;return i&&"function"==typeof(a=t.constructor)&&a!==r&&n(o=a.prototype)&&o!==r.prototype&&i(e,o),e}},function(e,t,r){"use strict";var n=r(107),i=r(130).getWeakData,a=r(25),o=r(19),s=r(109),u=r(110),c=r(135),l=r(20),h=r(31),f=h.set,d=h.getterFor,p=c.find,v=c.findIndex,g=0,m=function(e){return e.frozen||(e.frozen=new y)},y=function(){this.entries=[]},b=function(e,t){return p(e.entries,(function(e){return e[0]===t}))};y.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var r=b(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=v(this.entries,(function(t){return t[0]===e}));return~t&&this.entries.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,c){var h=e((function(e,n){s(e,h,t),f(e,{type:t,id:g++,frozen:void 0}),null!=n&&u(n,e[c],e,r)})),p=d(t),v=function(e,t,r){var n=p(e),o=i(a(t),!0);return!0===o?m(n).set(t,r):o[n.id]=r,e};return n(h.prototype,{delete:function(e){var t=p(this);if(!o(e))return!1;var r=i(e);return!0===r?m(t).delete(e):r&&l(r,t.id)&&delete r[t.id]},has:function(e){var t=p(this);if(!o(e))return!1;var r=i(e);return!0===r?m(t).has(e):r&&l(r,t.id)}}),n(h.prototype,r?{get:function(e){var t=p(this);if(o(e)){var r=i(e);return!0===r?m(t).get(e):r?r[t.id]:void 0}},set:function(e,t){return v(this,e,t)}}:{add:function(e){return v(this,e,!0)}}),h}}},function(e,t,r){var n=r(55),i=r(15),a=r(75),o=r(43),s=r(136),u=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,h=6==e,f=5==e||h;return function(d,p,v,g){for(var m,y,b=a(d),_=i(b),A=n(p,v,3),S=o(_.length),w=0,k=g||s,x=t?k(d,S):r?k(d,0):void 0;S>w;w++)if((f||w in _)&&(y=A(m=_[w],w,b),e))if(t)x[w]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return w;case 2:u.call(x,m)}else if(l)return!1;return h?-1:c||l?l:x}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},function(e,t,r){var n=r(19),i=r(137),a=r(51)("species");e.exports=function(e,t){var r;return i(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!i(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){var n=r(16);e.exports=Array.isArray||function(e){return"Array"==n(e)}},function(e,t,r){r(100),r(139),r(102);var n=r(39);e.exports=n.WeakSet},function(e,t,r){"use strict";r(132)("WeakSet",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(134),!1,!0)},function(e,t,r){r(141);var n=r(54);e.exports=n("String","codePointAt")},function(e,t,r){"use strict";var n=r(7),i=r(70).codeAt;n({target:"String",proto:!0},{codePointAt:function(e){return i(this,e)}})},function(e,t,r){r(143);var n=r(39);e.exports=n.String.fromCodePoint},function(e,t,r){var n=r(7),i=r(45),a=String.fromCharCode,o=String.fromCodePoint;n({target:"String",stat:!0,forced:!!o&&1!=o.length},{fromCodePoint:function(e){for(var t,r=[],n=arguments.length,o=0;n>o;){if(t=+arguments[o++],i(t,1114111)!==t)throw RangeError(t+" is not a valid code point");r.push(t<65536?a(t):a(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},function(e,t,r){r(145),r(100),r(147),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166);var n=r(39);e.exports=n.Symbol},function(e,t,r){"use strict";var n=r(7),i=r(11),a=r(137),o=r(19),s=r(75),u=r(43),c=r(85),l=r(136),h=r(146),f=r(51)("isConcatSpreadable"),d=!i((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),p=h("concat"),v=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)};n({target:"Array",proto:!0,forced:!d||!p},{concat:function(e){var t,r,n,i,a,o=s(this),h=l(o,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?o:arguments[t],v(a)){if(f+(i=u(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<i;r++,f++)r in a&&c(h,f,a[r])}else{if(f>=9007199254740991)throw TypeError("Maximum allowed index exceeded");c(h,f++,a)}return h.length=f,h}})},function(e,t,r){var n=r(11),i=r(51)("species");e.exports=function(e){return!n((function(){var t=[];return(t.constructor={})[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},function(e,t,r){"use strict";var n=r(7),i=r(8),a=r(29),o=r(10),s=r(52),u=r(11),c=r(20),l=r(137),h=r(19),f=r(25),d=r(75),p=r(14),v=r(18),g=r(13),m=r(64),y=r(66),b=r(40),_=r(148),A=r(47),S=r(9),w=r(24),k=r(12),x=r(23),C=r(26),P=r(27),R=r(33),T=r(35),E=r(34),O=r(51),L=r(149),F=r(150),I=r(77),j=r(31),M=r(135).forEach,N=R("hidden"),D=O("toPrimitive"),q=j.set,U=j.getterFor("Symbol"),W=Object.prototype,B=i.Symbol,z=i.JSON,G=z&&z.stringify,H=S.f,X=w.f,Y=_.f,V=k.f,Q=P("symbols"),K=P("op-symbols"),J=P("string-to-symbol-registry"),Z=P("symbol-to-string-registry"),$=P("wks"),ee=i.QObject,te=!ee||!ee.prototype||!ee.prototype.findChild,re=o&&u((function(){return 7!=m(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=H(W,t);n&&delete W[t],X(e,t,r),n&&e!==W&&X(W,t,n)}:X,ne=function(e,t){var r=Q[e]=m(B.prototype);return q(r,{type:"Symbol",tag:e,description:t}),o||(r.description=t),r},ie=s&&"symbol"==typeof B.iterator?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof B},ae=function(e,t,r){e===W&&ae(K,t,r),f(e);var n=v(t,!0);return f(r),c(Q,n)?(r.enumerable?(c(e,N)&&e[N][n]&&(e[N][n]=!1),r=m(r,{enumerable:g(0,!1)})):(c(e,N)||X(e,N,g(1,{})),e[N][n]=!0),re(e,n,r)):X(e,n,r)},oe=function(e,t){f(e);var r=p(t),n=y(r).concat(le(r));return M(n,(function(t){o&&!se.call(r,t)||ae(e,t,r[t])})),e},se=function(e){var t=v(e,!0),r=V.call(this,t);return!(this===W&&c(Q,t)&&!c(K,t))&&(!(r||!c(this,t)||!c(Q,t)||c(this,N)&&this[N][t])||r)},ue=function(e,t){var r=p(e),n=v(t,!0);if(r!==W||!c(Q,n)||c(K,n)){var i=H(r,n);return!i||!c(Q,n)||c(r,N)&&r[N][n]||(i.enumerable=!0),i}},ce=function(e){var t=Y(p(e)),r=[];return M(t,(function(e){c(Q,e)||c(T,e)||r.push(e)})),r},le=function(e){var t=e===W,r=Y(t?K:p(e)),n=[];return M(r,(function(e){!c(Q,e)||t&&!c(W,e)||n.push(Q[e])})),n};s||(C((B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=E(e),r=function(e){this===W&&r.call(K,e),c(this,N)&&c(this[N],t)&&(this[N][t]=!1),re(this,t,g(1,e))};return o&&te&&re(W,t,{configurable:!0,set:r}),ne(t,e)}).prototype,"toString",(function(){return U(this).tag})),k.f=se,w.f=ae,S.f=ue,b.f=_.f=ce,A.f=le,o&&(X(B.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),a||C(W,"propertyIsEnumerable",se,{unsafe:!0})),L.f=function(e){return ne(O(e),e)}),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:B}),M(y($),(function(e){F(e)})),n({target:"Symbol",stat:!0,forced:!s},{for:function(e){var t=String(e);if(c(J,t))return J[t];var r=B(t);return J[t]=r,Z[r]=t,r},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(c(Z,e))return Z[e]},useSetter:function(){te=!0},useSimple:function(){te=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!o},{create:function(e,t){return void 0===t?m(e):oe(m(e),t)},defineProperty:ae,defineProperties:oe,getOwnPropertyDescriptor:ue}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ce,getOwnPropertySymbols:le}),n({target:"Object",stat:!0,forced:u((function(){A.f(1)}))},{getOwnPropertySymbols:function(e){return A.f(d(e))}}),z&&n({target:"JSON",stat:!0,forced:!s||u((function(){var e=B();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}))},{stringify:function(e){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=t=n[1],(h(t)||void 0!==e)&&!ie(e))return l(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ie(t))return t}),n[1]=t,G.apply(z,n)}}),B.prototype[D]||x(B.prototype,D,B.prototype.valueOf),I(B,"Symbol"),T[N]=!0},function(e,t,r){var n=r(14),i=r(40).f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==a.call(e)?function(e){try{return i(e)}catch(e){return o.slice()}}(e):i(n(e))}},function(e,t,r){t.f=r(51)},function(e,t,r){var n=r(39),i=r(20),a=r(149),o=r(24).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});i(t,e)||o(t,e,{value:a.f(e)})}},function(e,t,r){r(150)("asyncIterator")},function(e,t,r){"use strict";var n=r(7),i=r(10),a=r(8),o=r(20),s=r(19),u=r(24).f,c=r(36),l=a.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var h={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new l(e):void 0===e?l():l(e);return""===e&&(h[t]=!0),t};c(f,l);var d=f.prototype=l.prototype;d.constructor=f;var p=d.toString,v="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;u(d,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(o(h,e))return"";var r=v?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},function(e,t,r){r(150)("hasInstance")},function(e,t,r){r(150)("isConcatSpreadable")},function(e,t,r){r(150)("iterator")},function(e,t,r){r(150)("match")},function(e,t,r){r(150)("matchAll")},function(e,t,r){r(150)("replace")},function(e,t,r){r(150)("search")},function(e,t,r){r(150)("species")},function(e,t,r){r(150)("split")},function(e,t,r){r(150)("toPrimitive")},function(e,t,r){r(150)("toStringTag")},function(e,t,r){r(150)("unscopables")},function(e,t,r){r(77)(Math,"Math",!0)},function(e,t,r){var n=r(8);r(77)(n.JSON,"JSON",!0)},function(e,t,r){r(168);var n=r(54);e.exports=n("String","padStart")},function(e,t,r){"use strict";var n=r(7),i=r(169).start;n({target:"String",proto:!0,forced:r(171)},{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){var n=r(43),i=r(170),a=r(17),o=Math.ceil,s=function(e){return function(t,r,s){var u,c,l=String(a(t)),h=l.length,f=void 0===s?" ":String(s),d=n(r);return d<=h||""==f?l:(u=d-h,(c=i.call(f,o(u/f.length))).length>u&&(c=c.slice(0,u)),e?l+c:c+l)}};e.exports={start:s(!1),end:s(!0)}},function(e,t,r){"use strict";var n=r(44),i=r(17);e.exports="".repeat||function(e){var t=String(i(this)),r="",a=n(e);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(t+=t))1&a&&(r+=t);return r}},function(e,t,r){var n=r(114);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(e,t,r){r(173);var n=r(54);e.exports=n("String","padEnd")},function(e,t,r){"use strict";var n=r(7),i=r(169).end;n({target:"String",proto:!0,forced:r(171)},{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(175);var n=r(39);e.exports=n.Object.values},function(e,t,r){var n=r(7),i=r(176).values;n({target:"Object",stat:!0},{values:function(e){return i(e)}})},function(e,t,r){var n=r(10),i=r(66),a=r(14),o=r(12).f,s=function(e){return function(t){for(var r,s=a(t),u=i(s),c=u.length,l=0,h=[];c>l;)r=u[l++],n&&!o.call(s,r)||h.push(e?[r,s[r]]:s[r]);return h}};e.exports={entries:s(!0),values:s(!1)}},function(e,t,r){"use strict";var n=!1;if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function(e){e.close()}}),n=!0}catch(e){}t.ReadableStream=n?ReadableStream:r(178).ReadableStream},function(e,t,r){"use strict";r.r(t),r.d(t,"ByteLengthQueuingStrategy",(function(){return Et})),r.d(t,"CountQueuingStrategy",(function(){return Ot})),r.d(t,"ReadableStream",(function(){return _t})),r.d(t,"TransformStream",(function(){return Lt})),r.d(t,"WritableStream",(function(){return V}));var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(e){return"Symbol("+e+")"};function i(){}var a=Number.isNaN||function(e){return e!=e};function o(e){return"object"==typeof e&&null!==e||"function"==typeof e}function s(e){return e.slice()}function u(e){return!1!==function(e){if("number"!=typeof e)return!1;if(a(e))return!1;if(e<0)return!1;return!0}(e)&&e!==1/0}function c(e,t,r){if("function"!=typeof e)throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}function l(e,t,r,n){var i=e[t];if(void 0!==i){if("function"!=typeof i)throw new TypeError(i+" is not a method");switch(r){case 0:return function(){return f(i,e,n)};case 1:return function(t){var r=[t].concat(n);return f(i,e,r)}}}return function(){return Promise.resolve()}}function h(e,t,r){var n=e[t];if(void 0!==n)return c(n,e,r)}function f(e,t,r){try{return Promise.resolve(c(e,t,r))}catch(e){return Promise.reject(e)}}function d(e){return e}function p(e){if(e=Number(e),a(e)||e<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");return e}function v(e){if(void 0===e)return function(){return 1};if("function"!=typeof e)throw new TypeError("size property of a queuing strategy must be a function");return function(t){return e(t)}}var g=function(){function e(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0}return Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),e.prototype.push=function(e){var t=this._back,r=t;16383===t._elements.length&&(r={_elements:[],_next:void 0}),t._elements.push(e),r!==t&&(this._back=r,t._next=r),++this._size},e.prototype.shift=function(){var e=this._front,t=e,r=this._cursor,n=r+1,i=e._elements,a=i[r];return 16384===n&&(t=e._next,n=0),--this._size,this._cursor=n,e!==t&&(this._front=t),i[r]=void 0,a},e.prototype.forEach=function(e){for(var t=this._cursor,r=this._front,n=r._elements;!(t===n.length&&void 0===r._next||t===n.length&&(t=0,0===(n=(r=r._next)._elements).length));)e(n[t]),++t},e.prototype.peek=function(){var e=this._front,t=this._cursor;return e._elements[t]},e}();function m(e,t,r){var n=null;!0===r&&(n=Object.prototype);var i=Object.create(n);return i.value=e,i.done=t,i}function y(e,t){e._forAuthorCode=!0,e._ownerReadableStream=t,t._reader=e,"readable"===t._state?S(e):"closed"===t._state?function(e){S(e),x(e)}(e):w(e,t._storedError)}function b(e,t){return xt(e._ownerReadableStream,t)}function _(e){"readable"===e._ownerReadableStream._state?k(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function(e,t){w(e,t)}(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),e._ownerReadableStream._reader=void 0,e._ownerReadableStream=void 0}function A(e){return new TypeError("Cannot "+e+" a stream using a released reader")}function S(e){e._closedPromise=new Promise((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r}))}function w(e,t){S(e),k(e,t)}function k(e,t){e._closedPromise.catch(i),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}function x(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0}var C=n("[[CancelSteps]]"),P=n("[[PullSteps]]");function R(e,t){void 0===t&&(t=!1);var r=new j(e);return r._forAuthorCode=t,r}function T(e){return new Promise((function(t,r){var n={_resolve:t,_reject:r};e._reader._readRequests.push(n)}))}function E(e,t,r){var n=e._reader;n._readRequests.shift()._resolve(m(t,r,n._forAuthorCode))}function O(e){return e._reader._readRequests.length}function L(e){var t=e._reader;return void 0!==t&&!!M(t)}var F,I,j=function(){function e(e){if(!1===wt(e))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");if(!0===kt(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader");y(this,e),this._readRequests=new g}return Object.defineProperty(e.prototype,"closed",{get:function(){return M(this)?this._closedPromise:Promise.reject(D("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return M(this)?void 0===this._ownerReadableStream?Promise.reject(A("cancel")):b(this,e):Promise.reject(D("cancel"))},e.prototype.read=function(){return M(this)?void 0===this._ownerReadableStream?Promise.reject(A("read from")):N(this):Promise.reject(D("read"))},e.prototype.releaseLock=function(){if(!M(this))throw D("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");_(this)}},e}();function M(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readRequests")}function N(e){var t=e._ownerReadableStream;return t._disturbed=!0,"closed"===t._state?Promise.resolve(m(void 0,!0,e._forAuthorCode)):"errored"===t._state?Promise.reject(t._storedError):t._readableStreamController[P]()}function D(e){return new TypeError("ReadableStreamDefaultReader.prototype."+e+" can only be used on a ReadableStreamDefaultReader")}"symbol"==typeof n.asyncIterator&&((F={})[n.asyncIterator]=function(){return this},I=F,Object.defineProperty(I,n.asyncIterator,{enumerable:!1}));var q={next:function(){if(!1===U(this))return Promise.reject(W("next"));var e=this._asyncIteratorReader;return void 0===e._ownerReadableStream?Promise.reject(A("iterate")):N(e).then((function(t){var r=t.done;return r&&_(e),m(t.value,r,!0)}))},return:function(e){if(!1===U(this))return Promise.reject(W("next"));var t=this._asyncIteratorReader;if(void 0===t._ownerReadableStream)return Promise.reject(A("finish iterating"));if(t._readRequests.length>0)return Promise.reject(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"));if(!1===this._preventCancel){var r=b(t,e);return _(t),r.then((function(){return m(e,!0,!0)}))}return _(t),Promise.resolve(m(e,!0,!0))}};function U(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorReader")}function W(e){return new TypeError("ReadableStreamAsyncIterator."+e+" can only be used on a ReadableSteamAsyncIterator")}void 0!==I&&Object.setPrototypeOf(q,I),Object.defineProperty(q,"next",{enumerable:!1}),Object.defineProperty(q,"return",{enumerable:!1});var B=i;function z(e){var t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}function G(e,t,r){if(!u(r=Number(r)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r}function H(e){e._queue=new g,e._queueTotalSize=0}var X=n("[[AbortSteps]]"),Y=n("[[ErrorSteps]]"),V=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),K(this);var r=t.size,n=t.highWaterMark;if(void 0!==e.type)throw new RangeError("Invalid type is specified");var i=v(r);void 0===n&&(n=1),function(e,t,r,n){var i=Object.create(de.prototype);var a=l(t,"write",1,[i]),o=l(t,"close",0,[]),s=l(t,"abort",1,[]);pe(e,i,(function(){return h(t,"start",[i])}),a,o,s,r,n)}(this,e,n=p(n),i)}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===J(this))throw Ae("locked");return Z(this)},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===J(this)?Promise.reject(Ae("abort")):!0===Z(this)?Promise.reject(new TypeError("Cannot abort a stream that already has a writer")):$(this,e)},e.prototype.getWriter=function(){if(!1===J(this))throw Ae("getWriter");return Q(this)},e}();function Q(e){return new oe(e)}function K(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new g,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1}function J(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")}function Z(e){return void 0!==e._writer}function $(e,t){var r=e._state;if("closed"===r||"errored"===r)return Promise.resolve(void 0);if(void 0!==e._pendingAbortRequest)return e._pendingAbortRequest._promise;var n=!1;"erroring"===r&&(n=!0,t=void 0);var i=new Promise((function(r,i){e._pendingAbortRequest={_promise:void 0,_resolve:r,_reject:i,_reason:t,_wasAlreadyErroring:n}}));return e._pendingAbortRequest._promise=i,!1===n&&te(e,t),i}function ee(e,t){"writable"!==e._state?re(e):te(e,t)}function te(e,t){var r=e._writableStreamController;e._state="erroring",e._storedError=t;var n=e._writer;void 0!==n&&le(n,t),!1===function(e){if(void 0===e._inFlightWriteRequest&&void 0===e._inFlightCloseRequest)return!1;return!0}(e)&&!0===r._started&&re(e)}function re(e){e._state="errored",e._writableStreamController[Y]();var t=e._storedError;if(e._writeRequests.forEach((function(e){e._reject(t)})),e._writeRequests=new g,void 0!==e._pendingAbortRequest){var r=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,!0===r._wasAlreadyErroring)return r._reject(t),void ie(e);e._writableStreamController[X](r._reason).then((function(){r._resolve(),ie(e)}),(function(t){r._reject(t),ie(e)}))}else ie(e)}function ne(e){return void 0!==e._closeRequest||void 0!==e._inFlightCloseRequest}function ie(e){void 0!==e._closeRequest&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);var t=e._writer;void 0!==t&&Ce(t,e._storedError)}function ae(e,t){var r=e._writer;void 0!==r&&t!==e._backpressure&&(!0===t?function(e){Re(e)}(r):Le(r)),e._backpressure=t}var oe=function(){function e(e){if(!1===J(e))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");if(!0===Z(e))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=e,e._writer=this;var t,r=e._state;if("writable"===r)!1===ne(e)&&!0===e._backpressure?Re(this):Ee(this),ke(this);else if("erroring"===r)Te(this,e._storedError),ke(this);else if("closed"===r)Ee(this),ke(t=this),Pe(t);else{var n=e._storedError;Te(this,n),xe(this,n)}}return Object.defineProperty(e.prototype,"closed",{get:function(){return!1===se(this)?Promise.reject(Se("closed")):this._closedPromise},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===se(this))throw Se("desiredSize");if(void 0===this._ownerWritableStream)throw we("desiredSize");return function(e){var t=e._ownerWritableStream,r=t._state;if("errored"===r||"erroring"===r)return null;if("closed"===r)return 0;return ge(t._writableStreamController)}(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return!1===se(this)?Promise.reject(Se("ready")):this._readyPromise},enumerable:!0,configurable:!0}),e.prototype.abort=function(e){return!1===se(this)?Promise.reject(Se("abort")):void 0===this._ownerWritableStream?Promise.reject(we("abort")):function(e,t){return $(e._ownerWritableStream,t)}(this,e)},e.prototype.close=function(){if(!1===se(this))return Promise.reject(Se("close"));var e=this._ownerWritableStream;return void 0===e?Promise.reject(we("close")):!0===ne(e)?Promise.reject(new TypeError("cannot close an already-closing stream")):ue(this)},e.prototype.releaseLock=function(){if(!1===se(this))throw Se("releaseLock");void 0!==this._ownerWritableStream&&he(this)},e.prototype.write=function(e){return!1===se(this)?Promise.reject(Se("write")):void 0===this._ownerWritableStream?Promise.reject(we("write to")):fe(this,e)},e}();function se(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")}function ue(e){var t=e._ownerWritableStream,r=t._state;if("closed"===r||"errored"===r)return Promise.reject(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"));var n,i=new Promise((function(e,r){var n={_resolve:e,_reject:r};t._closeRequest=n}));return!0===t._backpressure&&"writable"===r&&Le(e),G(n=t._writableStreamController,"close",0),me(n),i}function ce(e,t){"pending"===e._closedPromiseState?Ce(e,t):function(e,t){xe(e,t)}(e,t)}function le(e,t){"pending"===e._readyPromiseState?Oe(e,t):function(e,t){Te(e,t)}(e,t)}function he(e){var t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");le(e,r),ce(e,r),t._writer=void 0,e._ownerWritableStream=void 0}function fe(e,t){var r=e._ownerWritableStream,n=r._writableStreamController,i=function(e,t){try{return e._strategySizeAlgorithm(t)}catch(t){return ye(e,t),1}}(n,t);if(r!==e._ownerWritableStream)return Promise.reject(we("write to"));var a=r._state;if("errored"===a)return Promise.reject(r._storedError);if(!0===ne(r)||"closed"===a)return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"));if("erroring"===a)return Promise.reject(r._storedError);var o=function(e){return new Promise((function(t,r){var n={_resolve:t,_reject:r};e._writeRequests.push(n)}))}(r);return function(e,t,r){var n={chunk:t};try{G(e,n,r)}catch(t){return void ye(e,t)}var i=e._controlledWritableStream;if(!1===ne(i)&&"writable"===i._state){var a=be(e);ae(i,a)}me(e)}(n,t,i),o}var de=function(){function e(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}return e.prototype.error=function(e){if(!1===function(e){if(!o(e))return!1;if(!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream"))return!1;return!0}(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");"writable"===this._controlledWritableStream._state&&_e(this,e)},e.prototype[X]=function(e){var t=this._abortAlgorithm(e);return ve(this),t},e.prototype[Y]=function(){H(this)},e}();function pe(e,t,r,n,i,a,o,s){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,H(t),t._started=!1,t._strategySizeAlgorithm=s,t._strategyHWM=o,t._writeAlgorithm=n,t._closeAlgorithm=i,t._abortAlgorithm=a;var u=be(t);ae(e,u);var c=r();Promise.resolve(c).then((function(){t._started=!0,me(t)}),(function(r){t._started=!0,ee(e,r)})).catch(B)}function ve(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function ge(e){return e._strategyHWM-e._queueTotalSize}function me(e){var t=e._controlledWritableStream;if(!1!==e._started&&void 0===t._inFlightWriteRequest)if("erroring"!==t._state){if(0!==e._queue.length){var r=e._queue.peek().value;"close"===r?function(e){var t=e._controlledWritableStream;(function(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0})(t),z(e);var r=e._closeAlgorithm();ve(e),r.then((function(){!function(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,"erroring"===e._state&&(e._storedError=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";var t=e._writer;void 0!==t&&Pe(t)}(t)}),(function(e){!function(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,void 0!==e._pendingAbortRequest&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),ee(e,t)}(t,e)})).catch(B)}(e):function(e,t){var r=e._controlledWritableStream;(function(e){e._inFlightWriteRequest=e._writeRequests.shift()})(r),e._writeAlgorithm(t).then((function(){!function(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0}(r);var t=r._state;if(z(e),!1===ne(r)&&"writable"===t){var n=be(e);ae(r,n)}me(e)}),(function(t){"writable"===r._state&&ve(e),function(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,ee(e,t)}(r,t)})).catch(B)}(e,r.chunk)}}else re(t)}function ye(e,t){"writable"===e._controlledWritableStream._state&&_e(e,t)}function be(e){return ge(e)<=0}function _e(e,t){var r=e._controlledWritableStream;ve(e),te(r,t)}function Ae(e){return new TypeError("WritableStream.prototype."+e+" can only be used on a WritableStream")}function Se(e){return new TypeError("WritableStreamDefaultWriter.prototype."+e+" can only be used on a WritableStreamDefaultWriter")}function we(e){return new TypeError("Cannot "+e+" a stream using a released writer")}function ke(e){e._closedPromise=new Promise((function(t,r){e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending"}))}function xe(e,t){ke(e),Ce(e,t)}function Ce(e,t){e._closedPromise.catch(i),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected"}function Pe(e){e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved"}function Re(e){e._readyPromise=new Promise((function(t,r){e._readyPromise_resolve=t,e._readyPromise_reject=r})),e._readyPromiseState="pending"}function Te(e,t){Re(e),Oe(e,t)}function Ee(e){Re(e),Le(e)}function Oe(e,t){e._readyPromise.catch(i),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected"}function Le(e){e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled"}function Fe(e,t,r,n,a,o){var s=R(e),u=Q(t),c=!1,l=Promise.resolve();return new Promise((function(h,f){var d,p,v,g;if(void 0!==o){if(d=function(){var r=new DOMException("Aborted","AbortError"),i=[];!1===n&&i.push((function(){return"writable"===t._state?$(t,r):Promise.resolve()})),!1===a&&i.push((function(){return"readable"===e._state?xt(e,r):Promise.resolve()})),A((function(){return Promise.all(i.map((function(e){return e()})))}),!0,r)},!0===o.aborted)return void d();o.addEventListener("abort",d)}if(b(e,s._closedPromise,(function(e){!1===n?A((function(){return $(t,e)}),!0,e):S(!0,e)})),b(t,u._closedPromise,(function(t){!1===a?A((function(){return xt(e,t)}),!0,t):S(!0,t)})),p=e,v=s._closedPromise,g=function(){!1===r?A((function(){return function(e){var t=e._ownerWritableStream,r=t._state;return!0===ne(t)||"closed"===r?Promise.resolve():"errored"===r?Promise.reject(t._storedError):ue(e)}(u)})):S()},"closed"===p._state?g():v.then(g).catch(B),!0===ne(t)||"closed"===t._state){var m=new TypeError("the destination writable stream closed before all data could be piped to it");!1===a?A((function(){return xt(e,m)}),!0,m):S(!0,m)}function y(){var e=l;return l.then((function(){return e!==l?y():void 0}))}function b(e,t,r){"errored"===e._state?r(e._storedError):t.catch(r).catch(B)}function A(e,r,n){function i(){e().then((function(){return w(r,n)}),(function(e){return w(!0,e)})).catch(B)}!0!==c&&(c=!0,"writable"===t._state&&!1===ne(t)?y().then(i):i())}function S(e,r){!0!==c&&(c=!0,"writable"===t._state&&!1===ne(t)?y().then((function(){return w(e,r)})).catch(B):w(e,r))}function w(e,t){he(u),_(s),void 0!==o&&o.removeEventListener("abort",d),e?f(t):h(void 0)}new Promise((function(e,t){!function r(n){n?e():(!0===c?Promise.resolve(!0):u._readyPromise.then((function(){return N(s).then((function(e){var t=e.value;return!0===e.done||(l=fe(u,t).catch(i),!1)}))}))).then(r,t)}(!1)})).catch(B)}))}var Ie=function(){function e(){throw new TypeError}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===je(this))throw He("desiredSize");return Be(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===je(this))throw He("close");if(!1===ze(this))throw new TypeError("The stream is not in a state that permits close");qe(this)},e.prototype.enqueue=function(e){if(!1===je(this))throw He("enqueue");if(!1===ze(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ue(this,e)},e.prototype.error=function(e){if(!1===je(this))throw He("error");We(this,e)},e.prototype[C]=function(e){H(this);var t=this._cancelAlgorithm(e);return De(this),t},e.prototype[P]=function(){var e=this._controlledReadableStream;if(this._queue.length>0){var t=z(this);return!0===this._closeRequested&&0===this._queue.length?(De(this),Ct(e)):Me(this),Promise.resolve(m(t,!1,e._reader._forAuthorCode))}var r=T(e);return Me(this),r},e}();function je(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")}function Me(e){!1!==Ne(e)&&(!0!==e._pulling?(e._pulling=!0,e._pullAlgorithm().then((function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Me(e))}),(function(t){We(e,t)})).catch(B)):e._pullAgain=!0)}function Ne(e){var t=e._controlledReadableStream;return!1!==ze(e)&&(!1!==e._started&&(!0===kt(t)&&O(t)>0||Be(e)>0))}function De(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0}function qe(e){var t=e._controlledReadableStream;e._closeRequested=!0,0===e._queue.length&&(De(e),Ct(t))}function Ue(e,t){var r=e._controlledReadableStream;if(!0===kt(r)&&O(r)>0)E(r,t,!1);else{var n=void 0;try{n=e._strategySizeAlgorithm(t)}catch(t){throw We(e,t),t}try{G(e,t,n)}catch(t){throw We(e,t),t}}Me(e)}function We(e,t){var r=e._controlledReadableStream;"readable"===r._state&&(H(e),De(e),Pt(r,t))}function Be(e){var t=e._controlledReadableStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function ze(e){var t=e._controlledReadableStream._state;return!1===e._closeRequested&&"readable"===t}function Ge(e,t,r,n,i,a,o){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,H(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=o,t._strategyHWM=a,t._pullAlgorithm=n,t._cancelAlgorithm=i,e._readableStreamController=t;var s=r();Promise.resolve(s).then((function(){t._started=!0,Me(t)}),(function(e){We(t,e)})).catch(B)}function He(e){return new TypeError("ReadableStreamDefaultController.prototype."+e+" can only be used on a ReadableStreamDefaultController")}var Xe=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},Ye=function(){function e(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}return Object.defineProperty(e.prototype,"view",{get:function(){if(!1===Ke(this))throw ft("view");return this._view},enumerable:!0,configurable:!0}),e.prototype.respond=function(e){if(!1===Ke(this))throw ft("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");this._view.buffer,function(e,t){if(!1===u(t=Number(t)))throw new RangeError("bytesWritten must be a finite");ot(e,t)}(this._associatedReadableByteStreamController,e)},e.prototype.respondWithNewView=function(e){if(!1===Ke(this))throw ft("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");if(!ArrayBuffer.isView(e))throw new TypeError("You can only respond with array buffer views");e.buffer,function(e,t){var r=e._pendingPullIntos.peek();if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.byteLength!==t.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");r.buffer=t.buffer,ot(e,t.byteLength)}(this._associatedReadableByteStreamController,e)},e}(),Ve=function(){function e(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}return Object.defineProperty(e.prototype,"byobRequest",{get:function(){if(!1===Qe(this))throw dt("byobRequest");if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var e=this._pendingPullIntos.peek(),t=new Uint8Array(e.buffer,e.byteOffset+e.bytesFilled,e.byteLength-e.bytesFilled),r=Object.create(Ye.prototype);!function(e,t,r){e._associatedReadableByteStreamController=t,e._view=r}(r,this,t),this._byobRequest=r}return this._byobRequest},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Qe(this))throw dt("desiredSize");return lt(this)},enumerable:!0,configurable:!0}),e.prototype.close=function(){if(!1===Qe(this))throw dt("close");if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");var e=this._controlledReadableByteStream._state;if("readable"!==e)throw new TypeError("The stream (in "+e+" state) is not in the readable state and cannot be closed");!function(e){var t=e._controlledReadableByteStream;if(e._queueTotalSize>0)return void(e._closeRequested=!0);if(e._pendingPullIntos.length>0){if(e._pendingPullIntos.peek().bytesFilled>0){var r=new TypeError("Insufficient bytes to fill elements in the given buffer");throw ct(e,r),r}}ut(e),Ct(t)}(this)},e.prototype.enqueue=function(e){if(!1===Qe(this))throw dt("enqueue");if(!0===this._closeRequested)throw new TypeError("stream is closed or draining");var t=this._controlledReadableByteStream._state;if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be enqueued to");if(!ArrayBuffer.isView(e))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");e.buffer,function(e,t){var r=e._controlledReadableByteStream,n=t.buffer,i=t.byteOffset,a=t.byteLength,o=d(n);if(!0===L(r))if(0===O(r))et(e,o,i,a);else{var s=new Uint8Array(o,i,a);E(r,s,!1)}else!0===gt(r)?(et(e,o,i,a),at(e)):et(e,o,i,a);Je(e)}(this,e)},e.prototype.error=function(e){if(!1===Qe(this))throw dt("error");ct(this,e)},e.prototype[C]=function(e){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0);H(this);var t=this._cancelAlgorithm(e);return ut(this),t},e.prototype[P]=function(){var e=this._controlledReadableByteStream;if(this._queueTotalSize>0){var t=this._queue.shift();this._queueTotalSize-=t.byteLength,nt(this);var r=void 0;try{r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}catch(e){return Promise.reject(e)}return Promise.resolve(m(r,!1,e._reader._forAuthorCode))}var n=this._autoAllocateChunkSize;if(void 0!==n){var i=void 0;try{i=new ArrayBuffer(n)}catch(e){return Promise.reject(e)}var a={buffer:i,byteOffset:0,byteLength:n,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(a)}var o=T(e);return Je(this),o},e}();function Qe(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")}function Ke(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")}function Je(e){!1!==function(e){var t=e._controlledReadableByteStream;if("readable"!==t._state)return!1;if(!0===e._closeRequested)return!1;if(!1===e._started)return!1;if(!0===L(t)&&O(t)>0)return!0;if(!0===gt(t)&&vt(t)>0)return!0;if(lt(e)>0)return!0;return!1}(e)&&(!0!==e._pulling?(e._pulling=!0,e._pullAlgorithm().then((function(){e._pulling=!1,!0===e._pullAgain&&(e._pullAgain=!1,Je(e))}),(function(t){ct(e,t)})).catch(B)):e._pullAgain=!0)}function Ze(e,t){var r=!1;"closed"===e._state&&(r=!0);var n=$e(t);"default"===t.readerType?E(e,n,r):function(e,t,r){var n=e._reader;n._readIntoRequests.shift()._resolve(m(t,r,n._forAuthorCode))}(e,n,r)}function $e(e){var t=e.bytesFilled,r=e.elementSize;return new e.ctor(e.buffer,e.byteOffset,t/r)}function et(e,t,r,n){e._queue.push({buffer:t,byteOffset:r,byteLength:n}),e._queueTotalSize+=n}function tt(e,t){var r=t.elementSize,n=t.bytesFilled-t.bytesFilled%r,i=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),a=t.bytesFilled+i,o=a-a%r,s=i,u=!1;o>n&&(s=o-t.bytesFilled,u=!0);for(var c,l,h,f,d,p=e._queue;s>0;){var v=p.peek(),g=Math.min(s,v.byteLength),m=t.byteOffset+t.bytesFilled;c=t.buffer,l=m,h=v.buffer,f=v.byteOffset,d=g,new Uint8Array(c).set(new Uint8Array(h,f,d),l),v.byteLength===g?p.shift():(v.byteOffset+=g,v.byteLength-=g),e._queueTotalSize-=g,rt(e,g,t),s-=g}return u}function rt(e,t,r){it(e),r.bytesFilled+=t}function nt(e){0===e._queueTotalSize&&!0===e._closeRequested?(ut(e),Ct(e._controlledReadableByteStream)):Je(e)}function it(e){void 0!==e._byobRequest&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=void 0,e._byobRequest=void 0)}function at(e){for(;e._pendingPullIntos.length>0;){if(0===e._queueTotalSize)return;var t=e._pendingPullIntos.peek();!0===tt(e,t)&&(st(e),Ze(e._controlledReadableByteStream,t))}}function ot(e,t){var r=e._pendingPullIntos.peek();if("closed"===e._controlledReadableByteStream._state){if(0!==t)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");!function(e,t){t.buffer=d(t.buffer);var r=e._controlledReadableByteStream;if(!0===gt(r))for(;vt(r)>0;){Ze(r,st(e))}}(e,r)}else!function(e,t,r){if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range");if(rt(e,t,r),!(r.bytesFilled<r.elementSize)){st(e);var n=r.bytesFilled%r.elementSize;if(n>0){var i=r.byteOffset+r.bytesFilled,a=r.buffer.slice(i-n,i);et(e,a,0,a.byteLength)}r.buffer=d(r.buffer),r.bytesFilled-=n,Ze(e._controlledReadableByteStream,r),at(e)}}(e,t,r);Je(e)}function st(e){var t=e._pendingPullIntos.shift();return it(e),t}function ut(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0}function ct(e,t){var r=e._controlledReadableByteStream;"readable"===r._state&&(!function(e){it(e),e._pendingPullIntos=new g}(e),H(e),ut(e),Pt(r,t))}function lt(e){var t=e._controlledReadableByteStream._state;return"errored"===t?null:"closed"===t?0:e._strategyHWM-e._queueTotalSize}function ht(e,t,r){var n=Object.create(Ve.prototype);var i=l(t,"pull",0,[n]),a=l(t,"cancel",1,[]),o=t.autoAllocateChunkSize;if(void 0!==o&&(o=Number(o),!1===Xe(o)||o<=0))throw new RangeError("autoAllocateChunkSize must be a positive integer");!function(e,t,r,n,i,a,o){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=void 0,t._queue=t._queueTotalSize=void 0,H(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=p(a),t._pullAlgorithm=n,t._cancelAlgorithm=i,t._autoAllocateChunkSize=o,t._pendingPullIntos=new g,e._readableStreamController=t;var s=r();Promise.resolve(s).then((function(){t._started=!0,Je(t)}),(function(e){ct(t,e)})).catch(B)}(e,n,(function(){return h(t,"start",[n])}),i,a,r,o)}function ft(e){return new TypeError("ReadableStreamBYOBRequest.prototype."+e+" can only be used on a ReadableStreamBYOBRequest")}function dt(e){return new TypeError("ReadableByteStreamController.prototype."+e+" can only be used on a ReadableByteStreamController")}function pt(e){return new Promise((function(t,r){var n={_resolve:t,_reject:r};e._reader._readIntoRequests.push(n)}))}function vt(e){return e._reader._readIntoRequests.length}function gt(e){var t=e._reader;return void 0!==t&&!!yt(t)}var mt=function(){function e(e){if(!wt(e))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");if(!1===Qe(e._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");if(kt(e))throw new TypeError("This stream has already been locked for exclusive reading by another reader");y(this,e),this._readIntoRequests=new g}return Object.defineProperty(e.prototype,"closed",{get:function(){return yt(this)?this._closedPromise:Promise.reject(bt("closed"))},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return yt(this)?void 0===this._ownerReadableStream?Promise.reject(A("cancel")):b(this,e):Promise.reject(bt("cancel"))},e.prototype.read=function(e){return yt(this)?void 0===this._ownerReadableStream?Promise.reject(A("read from")):ArrayBuffer.isView(e)?(e.buffer,0===e.byteLength?Promise.reject(new TypeError("view must have non-zero byteLength")):function(e,t){var r=e._ownerReadableStream;if(r._disturbed=!0,"errored"===r._state)return Promise.reject(r._storedError);return function(e,t){var r=e._controlledReadableByteStream,n=1;t.constructor!==DataView&&(n=t.constructor.BYTES_PER_ELEMENT);var i=t.constructor,a={buffer:d(t.buffer),byteOffset:t.byteOffset,byteLength:t.byteLength,bytesFilled:0,elementSize:n,ctor:i,readerType:"byob"};if(e._pendingPullIntos.length>0)return e._pendingPullIntos.push(a),pt(r);if("closed"===r._state){var o=new i(a.buffer,a.byteOffset,0);return Promise.resolve(m(o,!0,r._reader._forAuthorCode))}if(e._queueTotalSize>0){if(!0===tt(e,a)){var s=$e(a);return nt(e),Promise.resolve(m(s,!1,r._reader._forAuthorCode))}if(!0===e._closeRequested){var u=new TypeError("Insufficient bytes to fill elements in the given buffer");return ct(e,u),Promise.reject(u)}}e._pendingPullIntos.push(a);var c=pt(r);return Je(e),c}(r._readableStreamController,t)}(this,e)):Promise.reject(new TypeError("view must be an array buffer view")):Promise.reject(bt("read"))},e.prototype.releaseLock=function(){if(!yt(this))throw bt("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");_(this)}},e}();function yt(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")}function bt(e){return new TypeError("ReadableStreamBYOBReader.prototype."+e+" can only be used on a ReadableStreamBYOBReader")}var _t=function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t={}),St(this);var r=t.size,n=t.highWaterMark,i=e.type;if("bytes"===String(i)){if(void 0!==r)throw new RangeError("The strategy for a byte stream cannot have a size function");void 0===n&&(n=0),ht(this,e,n=p(n))}else{if(void 0!==i)throw new RangeError("Invalid type is specified");var a=v(r);void 0===n&&(n=1),function(e,t,r,n){var i=Object.create(Ie.prototype),a=l(t,"pull",0,[i]),o=l(t,"cancel",1,[]);Ge(e,i,(function(){return h(t,"start",[i])}),a,o,r,n)}(this,e,n=p(n),a)}}return Object.defineProperty(e.prototype,"locked",{get:function(){if(!1===wt(this))throw Tt("locked");return kt(this)},enumerable:!0,configurable:!0}),e.prototype.cancel=function(e){return!1===wt(this)?Promise.reject(Tt("cancel")):!0===kt(this)?Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")):xt(this,e)},e.prototype.getReader=function(e){var t=(void 0===e?{}:e).mode;if(!1===wt(this))throw Tt("getReader");if(void 0===t)return R(this,!0);if("byob"===(t=String(t)))return function(e,t){void 0===t&&(t=!1);var r=new mt(e);return r._forAuthorCode=t,r}(this,!0);throw new RangeError("Invalid mode is specified")},e.prototype.pipeThrough=function(e,t){var r=e.writable,n=e.readable,a=void 0===t?{}:t,o=a.preventClose,s=a.preventAbort,u=a.preventCancel,c=a.signal;if(!1===wt(this))throw Tt("pipeThrough");if(!1===J(r))throw new TypeError("writable argument to pipeThrough must be a WritableStream");if(!1===wt(n))throw new TypeError("readable argument to pipeThrough must be a ReadableStream");if(o=Boolean(o),s=Boolean(s),u=Boolean(u),void 0!==c&&!Rt(c))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal");if(!0===kt(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(!0===Z(r))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");return Fe(this,r,o,s,u,c).catch(i),n},e.prototype.pipeTo=function(e,t){var r=void 0===t?{}:t,n=r.preventClose,i=r.preventAbort,a=r.preventCancel,o=r.signal;return!1===wt(this)?Promise.reject(Tt("pipeTo")):!1===J(e)?Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream")):(n=Boolean(n),i=Boolean(i),a=Boolean(a),void 0===o||Rt(o)?!0===kt(this)?Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===Z(e)?Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Fe(this,e,n,i,a,o):Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal")))},e.prototype.tee=function(){if(!1===wt(this))throw Tt("tee");var e=function(e,t){var r,n,i,a,o,u=R(e),c=!1,l=!1,h=!1,f=new Promise((function(e){o=e}));function d(){return!0===c?Promise.resolve():(c=!0,N(u).then((function(e){if(c=!1,!0===e.done)return!1===l&&qe(i._readableStreamController),void(!1===h&&qe(a._readableStreamController));var t=e.value,r=t,n=t;!1===l&&Ue(i._readableStreamController,r),!1===h&&Ue(a._readableStreamController,n)})).catch(B),Promise.resolve())}function p(){}return i=At(p,d,(function(t){if(l=!0,r=t,!0===h){var i=s([r,n]),a=xt(e,i);o(a)}return f})),a=At(p,d,(function(t){if(h=!0,n=t,!0===l){var i=s([r,n]),a=xt(e,i);o(a)}return f})),u._closedPromise.catch((function(e){We(i._readableStreamController,e),We(a._readableStreamController,e)})),[i,a]}(this);return s(e)},e.prototype.getIterator=function(e){var t=(void 0===e?{}:e).preventCancel,r=void 0!==t&&t;if(!1===wt(this))throw Tt("getIterator");return function(e,t){void 0===t&&(t=!1);var r=R(e),n=Object.create(q);return n._asyncIteratorReader=r,n._preventCancel=Boolean(t),n}(this,r)},e}();function At(e,t,r,n,i){void 0===n&&(n=1),void 0===i&&(i=function(){return 1});var a=Object.create(_t.prototype);return St(a),Ge(a,Object.create(Ie.prototype),e,t,r,n,i),a}function St(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1}function wt(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")}function kt(e){return void 0!==e._reader}function xt(e,t){return e._disturbed=!0,"closed"===e._state?Promise.resolve(void 0):"errored"===e._state?Promise.reject(e._storedError):(Ct(e),e._readableStreamController[C](t).then((function(){})))}function Ct(e){e._state="closed";var t=e._reader;void 0!==t&&(M(t)&&(t._readRequests.forEach((function(e){e._resolve(m(void 0,!0,t._forAuthorCode))})),t._readRequests=new g),x(t))}function Pt(e,t){e._state="errored",e._storedError=t;var r=e._reader;void 0!==r&&(M(r)?(r._readRequests.forEach((function(e){e._reject(t)})),r._readRequests=new g):(r._readIntoRequests.forEach((function(e){e._reject(t)})),r._readIntoRequests=new g),k(r,t))}function Rt(e){if("object"!=typeof e||null===e)return!1;var t=Object.getOwnPropertyDescriptor(AbortSignal.prototype,"aborted").get;try{return t.call(e),!0}catch(e){return!1}}function Tt(e){return new TypeError("ReadableStream.prototype."+e+" can only be used on a ReadableStream")}"symbol"==typeof n.asyncIterator&&Object.defineProperty(_t.prototype,n.asyncIterator,{value:_t.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0});var Et=function(){function e(e){var t=e.highWaterMark;this.highWaterMark=t}return e.prototype.size=function(e){return e.byteLength},e}(),Ot=function(){function e(e){var t=e.highWaterMark;this.highWaterMark=t}return e.prototype.size=function(){return 1},e}(),Lt=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t={}),void 0===r&&(r={});var n=t.size,i=t.highWaterMark,a=r.size,o=r.highWaterMark;if(void 0!==e.writableType)throw new RangeError("Invalid writable type specified");var s=v(n);if(void 0===i&&(i=1),i=p(i),void 0!==e.readableType)throw new RangeError("Invalid readable type specified");var u,c=v(a);void 0===o&&(o=0),o=p(o),function(e,t,r,n,i,a){function o(){return t}e._writable=function(e,t,r,n,i,a){void 0===i&&(i=1),void 0===a&&(a=function(){return 1});var o=Object.create(V.prototype);return K(o),pe(o,Object.create(de.prototype),e,t,r,n,i,a),o}(o,(function(t){return function(e,t){var r=e._transformStreamController;if(!0===e._backpressure){return e._backpressureChangePromise.then((function(){var n=e._writable;if("erroring"===n._state)throw n._storedError;return Wt(r,t)}))}return Wt(r,t)}(e,t)}),(function(){return function(e){var t=e._readable,r=e._transformStreamController,n=r._flushAlgorithm();return qt(r),n.then((function(){if("errored"===t._state)throw t._storedError;var e=t._readableStreamController;!0===ze(e)&&qe(e)})).catch((function(r){throw It(e,r),t._storedError}))}(e)}),(function(t){return function(e,t){return It(e,t),Promise.resolve()}(e,t)}),r,n),e._readable=At(o,(function(){return function(e){return Mt(e,!1),e._backpressureChangePromise}(e)}),(function(t){return jt(e,t),Promise.resolve()}),i,a),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,Mt(e,!0),e._transformStreamController=void 0}(this,new Promise((function(e){u=e})),i,s,o,c),function(e,t){var r=Object.create(Nt.prototype),n=function(e){try{return Ut(r,e),Promise.resolve()}catch(e){return Promise.reject(e)}},i=t.transform;if(void 0!==i){if("function"!=typeof i)throw new TypeError("transform is not a method");n=function(e){return f(i,t,[e,r])}}var a=l(t,"flush",0,[r]);!function(e,t,r,n){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=n}(e,r,n,a)}(this,e);var d=h(e,"start",[this._transformStreamController]);u(d)}return Object.defineProperty(e.prototype,"readable",{get:function(){if(!1===Ft(this))throw zt("readable");return this._readable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"writable",{get:function(){if(!1===Ft(this))throw zt("writable");return this._writable},enumerable:!0,configurable:!0}),e}();function Ft(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")}function It(e,t){We(e._readable._readableStreamController,t),jt(e,t)}function jt(e,t){qt(e._transformStreamController),ye(e._writable._writableStreamController,t),!0===e._backpressure&&Mt(e,!1)}function Mt(e,t){void 0!==e._backpressureChangePromise&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=new Promise((function(t){e._backpressureChangePromise_resolve=t})),e._backpressure=t}var Nt=function(){function e(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}return Object.defineProperty(e.prototype,"desiredSize",{get:function(){if(!1===Dt(this))throw Bt("desiredSize");return Be(this._controlledTransformStream._readable._readableStreamController)},enumerable:!0,configurable:!0}),e.prototype.enqueue=function(e){if(!1===Dt(this))throw Bt("enqueue");Ut(this,e)},e.prototype.error=function(e){if(!1===Dt(this))throw Bt("error");var t;t=e,It(this._controlledTransformStream,t)},e.prototype.terminate=function(){if(!1===Dt(this))throw Bt("terminate");!function(e){var t=e._controlledTransformStream,r=t._readable._readableStreamController;!0===ze(r)&&qe(r);var n=new TypeError("TransformStream terminated");jt(t,n)}(this)},e}();function Dt(e){return!!o(e)&&!!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")}function qt(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0}function Ut(e,t){var r=e._controlledTransformStream,n=r._readable._readableStreamController;if(!1===ze(n))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ue(n,t)}catch(e){throw jt(r,e),r._readable._storedError}(function(e){return!0!==Ne(e)})(n)!==r._backpressure&&Mt(r,!0)}function Wt(e,t){return e._transformAlgorithm(t).catch((function(t){throw It(e._controlledTransformStream,t),t}))}function Bt(e){return new TypeError("TransformStreamDefaultController.prototype."+e+" can only be used on a TransformStreamDefaultController")}function zt(e){return new TypeError("TransformStream.prototype."+e+" can only be used on a TransformStream")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocument=function(e){var t,r=new L;if("string"==typeof e)t={url:e};else if((0,i.isArrayBuffer)(e))t={data:e};else if(e instanceof F)t={range:e};else{if("object"!==S(e))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");if(!e.url&&!e.data&&!e.range)throw new Error("Invalid parameter object: need either .data, .range or .url");t=e}var n=Object.create(null),o=null,u=null;for(var c in t)if("url"!==c||"undefined"==typeof window)if("range"!==c)if("worker"!==c)if("data"!==c||t[c]instanceof Uint8Array)n[c]=t[c];else{var f=t[c];if("string"==typeof f)n[c]=(0,i.stringToBytes)(f);else if("object"!==S(f)||null===f||isNaN(f.length)){if(!(0,i.isArrayBuffer)(f))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");n[c]=new Uint8Array(f)}else n[c]=new Uint8Array(f)}else u=t[c];else o=t[c];else n[c]=new URL(t[c],window.location).href;n.rangeChunkSize=n.rangeChunkSize||k,n.CMapReaderFactory=n.CMapReaderFactory||a.DOMCMapReaderFactory,n.ignoreErrors=!0!==n.stopAtErrors,n.pdfBug=!0===n.pdfBug;var p=Object.values(i.NativeImageDecoding);void 0!==n.nativeImageDecoderSupport&&p.includes(n.nativeImageDecoderSupport)||(n.nativeImageDecoderSupport=s.apiCompatibilityParams.nativeImageDecoderSupport||i.NativeImageDecoding.DECODE);Number.isInteger(n.maxImageSize)||(n.maxImageSize=-1);"boolean"!=typeof n.isEvalSupported&&(n.isEvalSupported=!0);"boolean"!=typeof n.disableFontFace&&(n.disableFontFace=s.apiCompatibilityParams.disableFontFace||!1);"boolean"!=typeof n.disableRange&&(n.disableRange=!1);"boolean"!=typeof n.disableStream&&(n.disableStream=!1);"boolean"!=typeof n.disableAutoFetch&&(n.disableAutoFetch=!1);"boolean"!=typeof n.disableCreateObjectURL&&(n.disableCreateObjectURL=s.apiCompatibilityParams.disableCreateObjectURL||!1);if((0,i.setVerbosityLevel)(n.verbosity),!u){var v={verbosity:n.verbosity,port:l.GlobalWorkerOptions.workerPort};u=v.port?N.fromPort(v):new N(v),r._worker=u}var g=r.docId;return u.promise.then((function(){if(r.destroyed)throw new Error("Loading aborted");return function(e,t,r,n){if(e.destroyed)return Promise.reject(new Error("Worker was destroyed"));r&&(t.length=r.length,t.initialData=r.initialData,t.progressiveDone=r.progressiveDone);return e.messageHandler.sendWithPromise("GetDocRequest",{docId:n,apiVersion:"2.3.200",source:{data:t.data,url:t.url,password:t.password,disableAutoFetch:t.disableAutoFetch,rangeChunkSize:t.rangeChunkSize,length:t.length},maxImageSize:t.maxImageSize,disableFontFace:t.disableFontFace,disableCreateObjectURL:t.disableCreateObjectURL,postMessageTransfers:e.postMessageTransfers,docBaseUrl:t.docBaseUrl,nativeImageDecoderSupport:t.nativeImageDecoderSupport,ignoreErrors:t.ignoreErrors,isEvalSupported:t.isEvalSupported}).then((function(t){if(e.destroyed)throw new Error("Worker was destroyed");return t}))}(u,n,o,g).then((function(e){if(r.destroyed)throw new Error("Loading aborted");var t;o?t=new d.PDFDataTransportStream({length:n.length,initialData:n.initialData,progressiveDone:n.progressiveDone,disableRange:n.disableRange,disableStream:n.disableStream},o):n.data||(t=R({url:n.url,length:n.length,httpHeaders:n.httpHeaders,withCredentials:n.withCredentials,rangeChunkSize:n.rangeChunkSize,disableRange:n.disableRange,disableStream:n.disableStream}));var i=new h.MessageHandler(g,e,u.port);i.postMessageTransfers=u.postMessageTransfers;var a=new q(i,r,t,n);r._transport=a,i.send("Ready",null)}))})).catch(r._capability.reject),r},t.setPDFNetworkStreamFactory=function(e){R=e},t.build=t.version=t.PDFPageProxy=t.PDFDocumentProxy=t.PDFWorker=t.PDFDataRangeTransport=t.LoopbackPort=void 0;var n=v(r(180)),i=r(1),a=r(183),o=r(184),s=r(185),u=r(186),c=v(r(3)),l=r(188),h=r(189),f=r(190),d=r(192),p=r(193);function v(e){return e&&e.__esModule?e:{default:e}}function g(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w,k=65536,x=!1,C=null,P=!1;"undefined"==typeof window?(x=!0,void 0===require.ensure&&(require.ensure=require("node-ensure")),P=!0):"undefined"!=typeof require&&"function"==typeof require.ensure&&(P=!0),"undefined"!=typeof requirejs&&requirejs.toUrl&&(w=requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));var R,T="undefined"!=typeof requirejs&&requirejs.load;if(C=P?function(){return new Promise((function(e,t){require.ensure([],(function(){try{var r;r=require("./pdf.worker.js"),e(r.WorkerMessageHandler)}catch(e){t(e)}}),t,"pdfjsWorker")}))}:T?function(){return new Promise((function(e,t){requirejs(["pdfjs-dist/build/pdf.worker"],(function(r){try{e(r.WorkerMessageHandler)}catch(e){t(e)}}),t)}))}:null,!w&&"object"===("undefined"==typeof document?"undefined":S(document))&&"currentScript"in document){var E=document.currentScript&&document.currentScript.src;E&&(w=E.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}var O,L=(O=0,function(){function e(){b(this,e),this._capability=(0,i.createPromiseCapability)(),this._transport=null,this._worker=null,this.docId="d"+O++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}return A(e,[{key:"destroy",value:function(){var e=this;return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then((function(){e._transport=null,e._worker&&(e._worker.destroy(),e._worker=null)}))}},{key:"then",value:function(e,t){return(0,a.deprecated)("PDFDocumentLoadingTask.then method, use the `promise` getter instead."),this.promise.then.apply(this.promise,arguments)}},{key:"promise",get:function(){return this._capability.promise}}]),e}()),F=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];b(this,e),this.length=t,this.initialData=r,this.progressiveDone=n,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._progressiveDoneListeners=[],this._readyCapability=(0,i.createPromiseCapability)()}return A(e,[{key:"addRangeListener",value:function(e){this._rangeListeners.push(e)}},{key:"addProgressListener",value:function(e){this._progressListeners.push(e)}},{key:"addProgressiveReadListener",value:function(e){this._progressiveReadListeners.push(e)}},{key:"addProgressiveDoneListener",value:function(e){this._progressiveDoneListeners.push(e)}},{key:"onDataRange",value:function(e,t){var r=!0,n=!1,i=void 0;try{for(var a,o=this._rangeListeners[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){(0,a.value)(e,t)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}},{key:"onDataProgress",value:function(e,t){var r=this;this._readyCapability.promise.then((function(){var n=!0,i=!1,a=void 0;try{for(var o,s=r._progressListeners[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(e,t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}))}},{key:"onDataProgressiveRead",value:function(e){var t=this;this._readyCapability.promise.then((function(){var r=!0,n=!1,i=void 0;try{for(var a,o=t._progressiveReadListeners[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){(0,a.value)(e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}))}},{key:"onDataProgressiveDone",value:function(){var e=this;this._readyCapability.promise.then((function(){var t=!0,r=!1,n=void 0;try{for(var i,a=e._progressiveDoneListeners[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){(0,i.value)()}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}))}},{key:"transportReady",value:function(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function(e,t){(0,i.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function(){}}]),e}();t.PDFDataRangeTransport=F;var I=function(){function e(t,r){b(this,e),this._pdfInfo=t,this._transport=r}return A(e,[{key:"getPage",value:function(e){return this._transport.getPage(e)}},{key:"getPageIndex",value:function(e){return this._transport.getPageIndex(e)}},{key:"getDestinations",value:function(){return this._transport.getDestinations()}},{key:"getDestination",value:function(e){return this._transport.getDestination(e)}},{key:"getPageLabels",value:function(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function(){return this._transport.getViewerPreferences()}},{key:"getOpenActionDestination",value:function(){return this._transport.getOpenActionDestination()}},{key:"getAttachments",value:function(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function(){return this._transport.getJavaScript()}},{key:"getOutline",value:function(){return this._transport.getOutline()}},{key:"getPermissions",value:function(){return this._transport.getPermissions()}},{key:"getMetadata",value:function(){return this._transport.getMetadata()}},{key:"getData",value:function(){return this._transport.getData()}},{key:"getDownloadInfo",value:function(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function(){return this._transport.getStats()}},{key:"cleanup",value:function(){this._transport.startCleanup()}},{key:"destroy",value:function(){return this.loadingTask.destroy()}},{key:"numPages",get:function(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function(){return this._transport.loadingParams}},{key:"loadingTask",get:function(){return this._transport.loadingTask}}]),e}();t.PDFDocumentProxy=I;var j=function(){function e(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];b(this,e),this.pageIndex=t,this._pageInfo=r,this._transport=n,this._stats=i?new a.StatTimer:a.DummyStatTimer,this._pdfBug=i,this.commonObjs=n.commonObjs,this.objs=new U,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates=Object.create(null),this.destroyed=!1}return A(e,[{key:"getViewport",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scale,r=e.rotation,n=void 0===r?this.rotate:r,i=e.dontFlip,o=void 0!==i&&i;return(arguments.length>1||"number"==typeof arguments[0])&&((0,a.deprecated)("getViewport is called with obsolete arguments."),t=arguments[0],n="number"==typeof arguments[1]?arguments[1]:this.rotate,o="boolean"==typeof arguments[2]&&arguments[2]),new a.PageViewport({viewBox:this.view,scale:t,rotation:n,dontFlip:o})}},{key:"getAnnotations",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.intent,r=void 0===t?null:t;return this.annotationsPromise&&this.annotationsIntent===r||(this.annotationsPromise=this._transport.getAnnotations(this.pageIndex,r),this.annotationsIntent=r),this.annotationsPromise}},{key:"render",value:function(e){var t=this,r=e.canvasContext,n=e.viewport,o=e.intent,s=void 0===o?"display":o,u=e.enableWebGL,c=void 0!==u&&u,l=e.renderInteractiveForms,h=void 0!==l&&l,f=e.transform,d=void 0===f?null:f,v=e.imageLayer,g=void 0===v?null:v,m=e.canvasFactory,y=void 0===m?null:m,b=e.background,_=void 0===b?null:b,A=this._stats;A.time("Overall");var S="print"===s?"print":"display";this.pendingCleanup=!1,this.intentStates[S]||(this.intentStates[S]=Object.create(null));var w=this.intentStates[S];w.streamReaderCancelTimeout&&(clearTimeout(w.streamReaderCancelTimeout),w.streamReaderCancelTimeout=null);var k=y||new a.DOMCanvasFactory,x=new p.WebGLContext({enable:c});w.displayReadyCapability||(w.displayReadyCapability=(0,i.createPromiseCapability)(),w.operatorList={fnArray:[],argsArray:[],lastChunk:!1},A.time("Page Request"),this._pumpOperatorList({pageIndex:this.pageNumber-1,intent:S,renderInteractiveForms:!0===h}));var C=function(e){var r=w.renderTasks.indexOf(P);r>=0&&w.renderTasks.splice(r,1),(t.cleanupAfterRender||"print"===S)&&(t.pendingCleanup=!0),t._tryCleanup(),e?(P.capability.reject(e),t._abortOperatorList({intentState:w,reason:e})):P.capability.resolve(),A.timeEnd("Rendering"),A.timeEnd("Overall")},P=new B({callback:C,params:{canvasContext:r,viewport:n,transform:d,imageLayer:g,background:_},objs:this.objs,commonObjs:this.commonObjs,operatorList:w.operatorList,pageNumber:this.pageNumber,canvasFactory:k,webGLContext:x,useRequestAnimationFrame:"print"!==S,pdfBug:this._pdfBug});w.renderTasks||(w.renderTasks=[]),w.renderTasks.push(P);var R=P.task;return w.displayReadyCapability.promise.then((function(e){t.pendingCleanup?C():(A.time("Rendering"),P.initializeGraphics(e),P.operatorListChanged())})).catch(C),R}},{key:"getOperatorList",value:function(){this.intentStates.oplist||(this.intentStates.oplist=Object.create(null));var e,t=this.intentStates.oplist;return t.opListReadCapability||((e={}).operatorListChanged=function(){if(t.operatorList.lastChunk){t.opListReadCapability.resolve(t.operatorList);var r=t.renderTasks.indexOf(e);r>=0&&t.renderTasks.splice(r,1)}},t.opListReadCapability=(0,i.createPromiseCapability)(),t.renderTasks=[],t.renderTasks.push(e),t.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this._stats.time("Page Request"),this._pumpOperatorList({pageIndex:this.pageIndex,intent:"oplist"})),t.opListReadCapability.promise}},{key:"streamTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.normalizeWhitespace,r=void 0!==t&&t,n=e.disableCombineTextItems,i=void 0!==n&&n,a=100;return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:!0===r,combineTextItems:!0!==i},{highWaterMark:a,size:function(e){return e.items.length}})}},{key:"getTextContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.streamTextContent(e);return new Promise((function(e,r){var n=t.getReader(),i={items:[],styles:Object.create(null)};!function t(){n.read().then((function(r){var n,a=r.value;r.done?e(i):(Object.assign(i.styles,a.styles),(n=i.items).push.apply(n,y(a.items)),t())}),r)}()}))}},{key:"_destroy",value:function(){var e=this;this.destroyed=!0,this._transport.pageCache[this.pageIndex]=null;var t=[];return Object.keys(this.intentStates).forEach((function(r){var n=e.intentStates[r];e._abortOperatorList({intentState:n,reason:new Error("Page was destroyed."),force:!0}),"oplist"!==r&&n.renderTasks.forEach((function(e){var r=e.capability.promise.catch((function(){}));t.push(r),e.cancel()}))})),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(t)}},{key:"cleanup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.pendingCleanup=!0,this._tryCleanup(e)}},{key:"_tryCleanup",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.pendingCleanup&&!Object.keys(this.intentStates).some((function(t){var r=e.intentStates[t];return 0!==r.renderTasks.length||!r.operatorList.lastChunk}))&&(Object.keys(this.intentStates).forEach((function(t){delete e.intentStates[t]})),this.objs.clear(),this.annotationsPromise=null,t&&this._stats instanceof a.StatTimer&&(this._stats=new a.StatTimer),this.pendingCleanup=!1)}},{key:"_startRenderPage",value:function(e,t){var r=this.intentStates[t];r&&(this._stats.timeEnd("Page Request"),r.displayReadyCapability&&r.displayReadyCapability.resolve(e))}},{key:"_renderPageChunk",value:function(e,t){for(var r=0,n=e.length;r<n;r++)t.operatorList.fnArray.push(e.fnArray[r]),t.operatorList.argsArray.push(e.argsArray[r]);t.operatorList.lastChunk=e.lastChunk;for(var i=0;i<t.renderTasks.length;i++)t.renderTasks[i].operatorListChanged();e.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function(e){var t=this;(0,i.assert)(e.intent,'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');var r=this._transport.messageHandler.sendWithStream("GetOperatorList",e).getReader(),n=this.intentStates[e.intent];n.streamReader=r;!function e(){r.read().then((function(r){var i=r.value;r.done?n.streamReader=null:t._transport.destroyed||(t._renderPageChunk(i,n),e())}),(function(e){if(n.streamReader=null,!t._transport.destroyed){if(n.operatorList){n.operatorList.lastChunk=!0;for(var r=0;r<n.renderTasks.length;r++)n.renderTasks[r].operatorListChanged();t._tryCleanup()}if(n.displayReadyCapability)n.displayReadyCapability.reject(e);else{if(!n.opListReadCapability)throw e;n.opListReadCapability.reject(e)}}}))}()}},{key:"_abortOperatorList",value:function(e){var t=this,r=e.intentState,n=e.reason,o=e.force,s=void 0!==o&&o;if((0,i.assert)(n instanceof Error,'PDFPageProxy._abortOperatorList: Expected "reason" argument.'),r.streamReader){if(!s){if(0!==r.renderTasks.length)return;if(n instanceof a.RenderingCancelledException)return void(r.streamReaderCancelTimeout=setTimeout((function(){t._abortOperatorList({intentState:r,reason:n,force:!0}),r.streamReaderCancelTimeout=null}),100))}r.streamReader.cancel(new i.AbortException(n&&n.message)),r.streamReader=null,this._transport.destroyed||(Object.keys(this.intentStates).some((function(e){return t.intentStates[e]===r&&(delete t.intentStates[e],!0)})),this.cleanup())}}},{key:"pageNumber",get:function(){return this.pageIndex+1}},{key:"rotate",get:function(){return this._pageInfo.rotate}},{key:"ref",get:function(){return this._pageInfo.ref}},{key:"userUnit",get:function(){return this._pageInfo.userUnit}},{key:"view",get:function(){return this._pageInfo.view}},{key:"stats",get:function(){return this._stats instanceof a.StatTimer?this._stats:null}}]),e}();t.PDFPageProxy=j;var M=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];b(this,e),this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}return A(e,[{key:"postMessage",value:function(e,t){var r=this;if(this._defer){var n=new WeakMap,a={data:function e(r){if("object"!==S(r)||null===r)return r;if(n.has(r))return n.get(r);var a,o;if((a=r.buffer)&&(0,i.isArrayBuffer)(a)){var s=t&&t.includes(a);return o=r===a?r:s?new r.constructor(a,r.byteOffset,r.byteLength):new r.constructor(r),n.set(r,o),o}for(var u in o=Array.isArray(r)?[]:{},n.set(r,o),r){for(var c=void 0,l=r;!(c=Object.getOwnPropertyDescriptor(l,u));)l=Object.getPrototypeOf(l);if(void 0!==c.value)if("function"!=typeof c.value)o[u]=e(c.value);else if(r.hasOwnProperty&&r.hasOwnProperty(u))throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(r[u]))}return o}(e)};this._deferred.then((function(){r._listeners.forEach((function(e){e.call(r,a)}))}))}else this._listeners.forEach((function(t){t.call(r,{data:e})}))}},{key:"addEventListener",value:function(e,t){this._listeners.push(t)}},{key:"removeEventListener",value:function(e,t){var r=this._listeners.indexOf(t);this._listeners.splice(r,1)}},{key:"terminate",value:function(){this._listeners.length=0}}]),e}();t.LoopbackPort=M;var N=function(){var e,t=new WeakMap,r=0;function n(){if(l.GlobalWorkerOptions.workerSrc)return l.GlobalWorkerOptions.workerSrc;if(void 0!==w)return w;throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function o(){try{if("undefined"!=typeof window)return window.pdfjsWorker&&window.pdfjsWorker.WorkerMessageHandler}catch(e){}return null}return function(){function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.name,n=void 0===r?null:r,a=e.port,o=void 0===a?null:a,u=e.verbosity,c=void 0===u?(0,i.getVerbosityLevel)():u;if(b(this,s),o&&t.has(o))throw new Error("Cannot use more than one PDFWorker per port");if(this.name=n,this.destroyed=!1,this.postMessageTransfers=!0,this.verbosity=c,this._readyCapability=(0,i.createPromiseCapability)(),this._port=null,this._webWorker=null,this._messageHandler=null,o)return t.set(o,this),void this._initializeFromPort(o);this._initialize()}return A(s,[{key:"_initializeFromPort",value:function(e){this._port=e,this._messageHandler=new h.MessageHandler("main","worker",e),this._messageHandler.on("ready",(function(){})),this._readyCapability.resolve()}},{key:"_initialize",value:function(){var e,t,r=this;if("undefined"!=typeof Worker&&!x&&!o()){var a=n();try{(0,i.isSameOrigin)(window.location.href,a)||(e=new URL(a,window.location).href,t="importScripts('"+e+"');",a=URL.createObjectURL(new Blob([t])));var s=new Worker(a),u=new h.MessageHandler("main","worker",s),c=function(){s.removeEventListener("error",l),u.destroy(),s.terminate(),r.destroyed?r._readyCapability.reject(new Error("Worker was destroyed")):r._setupFakeWorker()},l=function(){r._webWorker||c()};s.addEventListener("error",l),u.on("test",(function(e){s.removeEventListener("error",l),r.destroyed?c():e?(r._messageHandler=u,r._port=s,r._webWorker=s,e.supportTransfers||(r.postMessageTransfers=!1),r._readyCapability.resolve(),u.send("configure",{verbosity:r.verbosity})):(r._setupFakeWorker(),u.destroy(),s.terminate())})),u.on("ready",(function(e){if(s.removeEventListener("error",l),r.destroyed)c();else try{f()}catch(e){r._setupFakeWorker()}}));var f=function(){var e=new Uint8Array([r.postMessageTransfers?255:0]);try{u.send("test",e,[e.buffer])}catch(t){(0,i.warn)("Cannot use postMessage transfers."),e[0]=0,u.send("test",e)}};return void f()}catch(e){(0,i.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function(){var t=this;x||((0,i.warn)("Setting up fake worker."),x=!0),function(){if(e)return e.promise;e=(0,i.createPromiseCapability)();var t=o();return t?(e.resolve(t),e.promise):((C||function(){return(0,a.loadScript)(n()).then((function(){return window.pdfjsWorker.WorkerMessageHandler}))})().then(e.resolve,e.reject),e.promise)}().then((function(e){if(t.destroyed)t._readyCapability.reject(new Error("Worker was destroyed"));else{var n=new M;t._port=n;var i="fake"+r++,a=new h.MessageHandler(i+"_worker",i,n);e.setup(a,n);var o=new h.MessageHandler(i,i+"_worker",n);t._messageHandler=o,t._readyCapability.resolve()}})).catch((function(e){t._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(e.message,'".')))}))}},{key:"destroy",value:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),t.delete(this._port),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},{key:"promise",get:function(){return this._readyCapability.promise}},{key:"port",get:function(){return this._port}},{key:"messageHandler",get:function(){return this._messageHandler}}],[{key:"fromPort",value:function(e){if(!e||!e.port)throw new Error("PDFWorker.fromPort - invalid method signature.");return t.has(e.port)?t.get(e.port):new s(e)}},{key:"getWorkerSrc",value:function(){return n()}}]),s}()}();t.PDFWorker=N;var D,q=function(){function e(t,r,n,a){b(this,e),this.messageHandler=t,this.loadingTask=r,this.commonObjs=new U,this.fontLoader=new o.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this)}),this._params=a,this.CMapReaderFactory=new a.CMapReaderFactory({baseUrl:a.cMapUrl,isCompressed:a.cMapPacked}),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this._networkStream=n,this._fullReader=null,this._lastProgress=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=(0,i.createPromiseCapability)(),this.setupMessageHandler()}return A(e,[{key:"destroy",value:function(){var e=this;if(this.destroyCapability)return this.destroyCapability.promise;this.destroyed=!0,this.destroyCapability=(0,i.createPromiseCapability)(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));var t=[];this.pageCache.forEach((function(e){e&&t.push(e._destroy())})),this.pageCache.length=0,this.pagePromises.length=0;var r=this.messageHandler.sendWithPromise("Terminate",null);return t.push(r),Promise.all(t).then((function(){e.fontLoader.clear(),e._networkStream&&e._networkStream.cancelAllRequests(new i.AbortException("Worker was terminated.")),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()}),this.destroyCapability.reject),this.destroyCapability.promise}},{key:"setupMessageHandler",value:function(){var e=this,t=this.messageHandler,r=this.loadingTask;t.on("GetReader",(function(t,r){(0,i.assert)(e._networkStream),e._fullReader=e._networkStream.getFullReader(),e._fullReader.onProgress=function(t){e._lastProgress={loaded:t.loaded,total:t.total}},r.onPull=function(){e._fullReader.read().then((function(e){var t=e.value;e.done?r.close():((0,i.assert)((0,i.isArrayBuffer)(t)),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(t){e._fullReader.cancel(t)}})),t.on("ReaderHeadersReady",(function(t){var n=(0,i.createPromiseCapability)(),a=e._fullReader;return a.headersReady.then((function(){a.isStreamingSupported&&a.isRangeSupported||(e._lastProgress&&r.onProgress&&r.onProgress(e._lastProgress),a.onProgress=function(e){r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}),n.resolve({isStreamingSupported:a.isStreamingSupported,isRangeSupported:a.isRangeSupported,contentLength:a.contentLength})}),n.reject),n.promise})),t.on("GetRangeReader",(function(t,r){(0,i.assert)(e._networkStream);var n=e._networkStream.getRangeReader(t.begin,t.end);n?(r.onPull=function(){n.read().then((function(e){var t=e.value;e.done?r.close():((0,i.assert)((0,i.isArrayBuffer)(t)),r.enqueue(new Uint8Array(t),1,[t]))})).catch((function(e){r.error(e)}))},r.onCancel=function(e){n.cancel(e)}):r.close()})),t.on("GetDoc",(function(t){var n=t.pdfInfo;e._numPages=n.numPages,r._capability.resolve(new I(n,e))})),t.on("PasswordRequest",(function(t){if(e._passwordCapability=(0,i.createPromiseCapability)(),r.onPassword){try{r.onPassword((function(t){e._passwordCapability.resolve({password:t})}),t.code)}catch(t){e._passwordCapability.reject(t)}}else e._passwordCapability.reject(new i.PasswordException(t.message,t.code));return e._passwordCapability.promise})),t.on("PasswordException",(function(e){r._capability.reject(new i.PasswordException(e.message,e.code))})),t.on("InvalidPDF",(function(e){r._capability.reject(new i.InvalidPDFException(e.message))})),t.on("MissingPDF",(function(e){r._capability.reject(new i.MissingPDFException(e.message))})),t.on("UnexpectedResponse",(function(e){r._capability.reject(new i.UnexpectedResponseException(e.message,e.status))})),t.on("UnknownError",(function(e){r._capability.reject(new i.UnknownErrorException(e.message,e.details))})),t.on("DataLoaded",(function(t){r.onProgress&&r.onProgress({loaded:t.length,total:t.length}),e.downloadInfoCapability.resolve(t)})),t.on("StartRenderPage",(function(t){e.destroyed||e.pageCache[t.pageIndex]._startRenderPage(t.transparency,t.intent)})),t.on("commonobj",(function(r){if(!e.destroyed){var n=m(r,3),a=n[0],s=n[1],u=n[2];if(!e.commonObjs.has(a))switch(s){case"Font":var l=e._params;if("error"in u){var h=u.error;(0,i.warn)("Error during font loading: ".concat(h)),e.commonObjs.resolve(a,h);break}var f=null;l.pdfBug&&c.default.FontInspector&&c.default.FontInspector.enabled&&(f={registerFont:function(e,t){c.default.FontInspector.fontAdded(e,t)}});var d=new o.FontFaceObject(u,{isEvalSupported:l.isEvalSupported,disableFontFace:l.disableFontFace,ignoreErrors:l.ignoreErrors,onUnsupportedFeature:e._onUnsupportedFeature.bind(e),fontRegistry:f});e.fontLoader.bind(d).then((function(){e.commonObjs.resolve(a,d)}),(function(r){t.sendWithPromise("FontFallback",{id:a}).finally((function(){e.commonObjs.resolve(a,d)}))}));break;case"FontPath":case"FontType3Res":e.commonObjs.resolve(a,u);break;default:throw new Error("Got unknown common object type ".concat(s))}}})),t.on("obj",(function(t){if(!e.destroyed){var r=m(t,4),n=r[0],i=r[1],o=r[2],s=r[3],u=e.pageCache[i];if(!u.objs.has(n))switch(o){case"JpegStream":return new Promise((function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=function(){t(new Error("Error during JPEG image loading")),(0,a.releaseImageResources)(r)},r.src=s})).then((function(e){u.objs.resolve(n,e)}));case"Image":u.objs.resolve(n,s);s&&"data"in s&&s.data.length>8e6&&(u.cleanupAfterRender=!0);break;default:throw new Error("Got unknown object type ".concat(o))}}})),t.on("DocProgress",(function(t){e.destroyed||r.onProgress&&r.onProgress({loaded:t.loaded,total:t.total})})),t.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this)),t.on("JpegDecode",(function(t){if(e.destroyed)return Promise.reject(new Error("Worker was destroyed"));if("undefined"==typeof document)return Promise.reject(new Error('"document" is not defined.'));var r=m(t,2),n=r[0],i=r[1];return 3!==i&&1!==i?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise((function(e,t){var r=new Image;r.onload=function(){var t=r.width,n=r.height,o=t*n,s=4*o,u=new Uint8ClampedArray(o*i),c=document.createElement("canvas");c.width=t,c.height=n;var l=c.getContext("2d");l.drawImage(r,0,0);var h=l.getImageData(0,0,t,n).data;if(3===i)for(var f=0,d=0;f<s;f+=4,d+=3)u[d]=h[f],u[d+1]=h[f+1],u[d+2]=h[f+2];else if(1===i)for(var p=0,v=0;p<s;p+=4,v++)u[v]=h[p];e({data:u,width:t,height:n}),(0,a.releaseImageResources)(r),c.width=0,c.height=0,c=null,l=null},r.onerror=function(){t(new Error("JpegDecode failed to load image")),(0,a.releaseImageResources)(r)},r.src=n}))})),t.on("FetchBuiltInCMap",(function(t,r){if(e.destroyed)r.error(new Error("Worker was destroyed"));else{var n=!1;r.onPull=function(){n?r.close():(n=!0,e.CMapReaderFactory.fetch(t).then((function(e){r.enqueue(e,1,[e.cMapData.buffer])})).catch((function(e){r.error(e)})))}}}))}},{key:"_onUnsupportedFeature",value:function(e){var t=e.featureId;this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(t)}},{key:"getData",value:function(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function(e){var t=this;if(!Number.isInteger(e)||e<=0||e>this._numPages)return Promise.reject(new Error("Invalid page request"));var r=e-1;if(r in this.pagePromises)return this.pagePromises[r];var n=this.messageHandler.sendWithPromise("GetPage",{pageIndex:r}).then((function(e){if(t.destroyed)throw new Error("Transport destroyed");var n=new j(r,e,t,t._params.pdfBug);return t.pageCache[r]=n,n}));return this.pagePromises[r]=n,n}},{key:"getPageIndex",value:function(e){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:e}).catch((function(e){return Promise.reject(new Error(e))}))}},{key:"getAnnotations",value:function(e,t){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:e,intent:t})}},{key:"getDestinations",value:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function(e){return"string"!=typeof e?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:e})}},{key:"getPageLabels",value:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenActionDestination",value:function(){return this.messageHandler.sendWithPromise("GetOpenActionDestination",null)}},{key:"getAttachments",value:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getOutline",value:function(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getPermissions",value:function(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function(){var e=this;return this.messageHandler.sendWithPromise("GetMetadata",null).then((function(t){return{info:t[0],metadata:t[1]?new f.Metadata(t[1]):null,contentDispositionFilename:e._fullReader?e._fullReader.filename:null}}))}},{key:"getStats",value:function(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function(){var e=this;this.messageHandler.sendWithPromise("Cleanup",null).then((function(){for(var t=0,r=e.pageCache.length;t<r;t++){var n=e.pageCache[t];n&&n.cleanup()}e.commonObjs.clear(),e.fontLoader.clear()}))}},{key:"loadingParams",get:function(){var e=this._params;return(0,i.shadow)(this,"loadingParams",{disableAutoFetch:e.disableAutoFetch,disableCreateObjectURL:e.disableCreateObjectURL,disableFontFace:e.disableFontFace,nativeImageDecoderSupport:e.nativeImageDecoderSupport})}}]),e}(),U=function(){function e(){b(this,e),this._objs=Object.create(null)}return A(e,[{key:"_ensureObj",value:function(e){return this._objs[e]?this._objs[e]:this._objs[e]={capability:(0,i.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t)return this._ensureObj(e).capability.promise.then(t),null;var r=this._objs[e];if(!r||!r.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(e,"."));return r.data}},{key:"has",value:function(e){var t=this._objs[e];return!!t&&t.resolved}},{key:"resolve",value:function(e,t){var r=this._ensureObj(e);r.resolved=!0,r.data=t,r.capability.resolve(t)}},{key:"clear",value:function(){for(var e in this._objs){var t=this._objs[e].data;"undefined"!=typeof Image&&t instanceof Image&&(0,a.releaseImageResources)(t)}this._objs=Object.create(null)}}]),e}(),W=function(){function e(t){b(this,e),this._internalRenderTask=t,this.onContinue=null}return A(e,[{key:"cancel",value:function(){this._internalRenderTask.cancel()}},{key:"then",value:function(e,t){return(0,a.deprecated)("RenderTask.then method, use the `promise` getter instead."),this.promise.then.apply(this.promise,arguments)}},{key:"promise",get:function(){return this._internalRenderTask.capability.promise}}]),e}(),B=(D=new WeakSet,function(){function e(t){var r=t.callback,n=t.params,a=t.objs,o=t.commonObjs,s=t.operatorList,u=t.pageNumber,c=t.canvasFactory,l=t.webGLContext,h=t.useRequestAnimationFrame,f=void 0!==h&&h,d=t.pdfBug,p=void 0!==d&&d;b(this,e),this.callback=r,this.params=n,this.objs=a,this.commonObjs=o,this.operatorListIdx=null,this.operatorList=s,this.pageNumber=u,this.canvasFactory=c,this.webGLContext=l,this._pdfBug=p,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this._useRequestAnimationFrame=!0===f&&"undefined"!=typeof window,this.cancelled=!1,this.capability=(0,i.createPromiseCapability)(),this.task=new W(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this),this._canvas=n.canvasContext.canvas}var t,r;return A(e,[{key:"initializeGraphics",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.cancelled){if(this._canvas){if(D.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");D.add(this._canvas)}this._pdfBug&&c.default.StepperManager&&c.default.StepperManager.enabled&&(this.stepper=c.default.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint());var t=this.params,r=t.canvasContext,n=t.viewport,i=t.transform,a=t.imageLayer,o=t.background;this.gfx=new u.CanvasGraphics(r,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,a),this.gfx.beginDrawing({transform:i,viewport:n,transparency:e,background:o}),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.running=!1,this.cancelled=!0,this.gfx&&this.gfx.endDrawing(),this._canvas&&D.delete(this._canvas),this.callback(e||new a.RenderingCancelledException("Rendering cancelled, page ".concat(this.pageNumber),"canvas"))}},{key:"operatorListChanged",value:function(){this.graphicsReady?(this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()):this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function(){var e=this;this._useRequestAnimationFrame?window.requestAnimationFrame((function(){e._nextBound().catch(e.cancel.bind(e))})):Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))}},{key:"_next",value:(t=n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.cancelled){e.next=2;break}return e.abrupt("return");case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this._canvas&&D.delete(this._canvas),this.callback()));case 4:case"end":return e.stop()}}),e,this)})),r=function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(e){g(a,n,i,o,s,"next",e)}function s(e){g(a,n,i,o,s,"throw",e)}o(void 0)}))},function(){return r.apply(this,arguments)})}]),e}());t.version="2.3.200";t.build="4ae3f9fc"},function(e,t,r){"use strict";e.exports=r(181)},function(e,t,r){"use strict";(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(e){var r,n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new R(n||[]);return a._invoke=function(e,t,r){var n=h;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return E()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};b[o]=function(){return this};var _=Object.getPrototypeOf,A=_&&_(_(T([])));A&&A!==n&&i.call(A,o)&&(b=A);var S=y.prototype=g.prototype=Object.create(b);function w(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function k(e){var r;this._invoke=function(n,a){function o(){return new Promise((function(r,o){!function r(n,a,o,s){var u=l(e[n],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"===t(h)&&i.call(h,"__await")?Promise.resolve(h.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):Promise.resolve(h).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}(n,a,r,o)}))}return r=r?r.then(o,o):o()}}function x(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,x(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,v;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:r,done:!0}}return m.prototype=S.constructor=y,y.constructor=m,y[u]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},w(k.prototype),k.prototype[s]=function(){return this},e.AsyncIterator=k,e.async=function(t,r,n,i){var a=new k(c(t,r,n,i));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(S),S[u]="Generator",S[o]=function(){return this},S.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}},e}("object"===t(e)?e.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(182)(e))},function(e,t,r){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addLinkAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.url,n=t.target,i=t.rel,o=t.enabled,s=void 0===o||o;(0,a.assert)(r&&"string"==typeof r,'addLinkAttributes: A valid "url" parameter must provided.');var u=(0,a.removeNullCharacters)(r);s?e.href=e.title=u:(e.href="",e.title="Disabled: ".concat(u),e.onclick=function(){return!1});var c=Object.values(S).includes(n)?n:S.NONE;e.target=w[c],e.rel="string"==typeof i?i:v},t.getFilenameFromUrl=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n=Math.min(t>0?t:e.length,r>0?r:e.length);return e.substring(e.lastIndexOf("/",n)+1,n)},t.isFetchSupported=P,t.isValidFetchUrl=R,t.loadScript=function(e){return new Promise((function(t,r){var n=document.createElement("script");n.src=e,n.onload=t,n.onerror=function(){r(new Error("Cannot load script at: ".concat(n.src)))},(document.head||document.documentElement).appendChild(n)}))},t.deprecated=function(e){console.log("Deprecated API usage: "+e)},t.releaseImageResources=function(e){(0,a.assert)(e instanceof Image,"Invalid `img` parameter.");var t=e.src;"string"==typeof t&&t.startsWith("blob:")&&URL.revokeObjectURL&&URL.revokeObjectURL(t);e.removeAttribute("src")},t.PDFDateString=t.DummyStatTimer=t.StatTimer=t.DOMSVGFactory=t.DOMCMapReaderFactory=t.DOMCanvasFactory=t.DEFAULT_LINK_REL=t.LinkTarget=t.RenderingCancelledException=t.PageViewport=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){l(a,n,i,o,s,"next",e)}function s(e){l(a,n,i,o,s,"throw",e)}o(void 0)}))}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v="noopener noreferrer nofollow";t.DEFAULT_LINK_REL=v;var g="http://www.w3.org/2000/svg",m=function(){function e(){f(this,e)}return p(e,[{key:"create",value:function(e,t){if(e<=0||t<=0)throw new Error("Invalid canvas size");var r=document.createElement("canvas"),n=r.getContext("2d");return r.width=e,r.height=t,{canvas:r,context:n}}},{key:"reset",value:function(e,t,r){if(!e.canvas)throw new Error("Canvas is not specified");if(t<=0||r<=0)throw new Error("Invalid canvas size");e.canvas.width=t,e.canvas.height=r}},{key:"destroy",value:function(e){if(!e.canvas)throw new Error("Canvas is not specified");e.canvas.width=0,e.canvas.height=0,e.canvas=null,e.context=null}}]),e}();t.DOMCanvasFactory=m;var y=function(){function e(t){var r=t.baseUrl,n=void 0===r?null:r,i=t.isCompressed,a=void 0!==i&&i;f(this,e),this.baseUrl=n,this.isCompressed=a}return p(e,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){var e=h(i.default.mark((function e(t){var r,n,o,s=this;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,this.baseUrl){e.next=3;break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');case 3:if(r){e.next=5;break}throw new Error("CMap name must be specified.");case 5:if(n=this.baseUrl+r+(this.isCompressed?".bcmap":""),o=this.isCompressed?a.CMapCompressionType.BINARY:a.CMapCompressionType.NONE,!P()||!R(n,document.baseURI)){e.next=9;break}return e.abrupt("return",fetch(n).then(function(){var e=h(i.default.mark((function e(t){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}throw new Error(t.statusText);case 2:if(!s.isCompressed){e.next=10;break}return e.t0=Uint8Array,e.next=6,t.arrayBuffer();case 6:e.t1=e.sent,r=new e.t0(e.t1),e.next=15;break;case 10:return e.t2=a.stringToBytes,e.next=13,t.text();case 13:e.t3=e.sent,r=(0,e.t2)(e.t3);case 15:return e.abrupt("return",{cMapData:r,compressionType:o});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"")+"CMap at: ".concat(n))})));case 9:return e.abrupt("return",new Promise((function(e,t){var r=new XMLHttpRequest;r.open("GET",n,!0),s.isCompressed&&(r.responseType="arraybuffer"),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){var n;if(200===r.status||0===r.status)if(s.isCompressed&&r.response?n=new Uint8Array(r.response):!s.isCompressed&&r.responseText&&(n=(0,a.stringToBytes)(r.responseText)),n)return void e({cMapData:n,compressionType:o});t(new Error(r.statusText))}},r.send(null)})).catch((function(e){throw new Error("Unable to load ".concat(s.isCompressed?"binary ":"")+"CMap at: ".concat(n))})));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())}]),e}();t.DOMCMapReaderFactory=y;var b=function(){function e(){f(this,e)}return p(e,[{key:"create",value:function(e,t){(0,a.assert)(e>0&&t>0,"Invalid SVG dimensions");var r=document.createElementNS(g,"svg:svg");return r.setAttribute("version","1.1"),r.setAttribute("width",e+"px"),r.setAttribute("height",t+"px"),r.setAttribute("preserveAspectRatio","none"),r.setAttribute("viewBox","0 0 "+e+" "+t),r}},{key:"createElement",value:function(e){return(0,a.assert)("string"==typeof e,"Invalid SVG element type"),document.createElementNS(g,e)}}]),e}();t.DOMSVGFactory=b;var _=function(){function e(t){var r=t.viewBox,n=t.scale,i=t.rotation,a=t.offsetX,o=void 0===a?0:a,s=t.offsetY,u=void 0===s?0:s,c=t.dontFlip,l=void 0!==c&&c;f(this,e),this.viewBox=r,this.scale=n,this.rotation=i,this.offsetX=o,this.offsetY=u;var h,d,p,v,g,m,y,b,_=(r[2]+r[0])/2,A=(r[3]+r[1])/2;switch(i=(i%=360)<0?i+360:i){case 180:h=-1,d=0,p=0,v=1;break;case 90:h=0,d=1,p=1,v=0;break;case 270:h=0,d=-1,p=-1,v=0;break;default:h=1,d=0,p=0,v=-1}l&&(p=-p,v=-v),0===h?(g=Math.abs(A-r[1])*n+o,m=Math.abs(_-r[0])*n+u,y=Math.abs(r[3]-r[1])*n,b=Math.abs(r[2]-r[0])*n):(g=Math.abs(_-r[0])*n+o,m=Math.abs(A-r[1])*n+u,y=Math.abs(r[2]-r[0])*n,b=Math.abs(r[3]-r[1])*n),this.transform=[h*n,d*n,p*n,v*n,g-h*n*_-p*n*A,m-d*n*_-v*n*A],this.width=y,this.height=b}return p(e,[{key:"clone",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,n=void 0===r?this.scale:r,i=t.rotation,a=void 0===i?this.rotation:i,o=t.dontFlip,s=void 0!==o&&o;return new e({viewBox:this.viewBox.slice(),scale:n,rotation:a,offsetX:this.offsetX,offsetY:this.offsetY,dontFlip:s})}},{key:"convertToViewportPoint",value:function(e,t){return a.Util.applyTransform([e,t],this.transform)}},{key:"convertToViewportRectangle",value:function(e){var t=a.Util.applyTransform([e[0],e[1]],this.transform),r=a.Util.applyTransform([e[2],e[3]],this.transform);return[t[0],t[1],r[0],r[1]]}},{key:"convertToPdfPoint",value:function(e,t){return a.Util.applyInverseTransform([e,t],this.transform)}}]),e}();t.PageViewport=_;var A=function(e){function t(e,r){var n;return f(this,t),(n=s(this,u(t).call(this,e))).type=r,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),t}(a.BaseException);t.RenderingCancelledException=A;var S={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4};t.LinkTarget=S;var w=["","_self","_blank","_parent","_top"];var k=function(){function e(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f(this,e),this.enabled=!!t,this.started=Object.create(null),this.times=[]}return p(e,[{key:"time",value:function(e){this.enabled&&(e in this.started&&(0,a.warn)("Timer is already running for "+e),this.started[e]=Date.now())}},{key:"timeEnd",value:function(e){this.enabled&&(e in this.started||(0,a.warn)("Timer has not been started for "+e),this.times.push({name:e,start:this.started[e],end:Date.now()}),delete this.started[e])}},{key:"toString",value:function(){var e="",t=0,r=!0,n=!1,i=void 0;try{for(var a,o=this.times[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value.name;s.length>t&&(t=s.length)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.times[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value,p=d.end-d.start;e+="".concat(d.name.padEnd(t)," ").concat(p,"ms\n")}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return e}}]),e}();t.StatTimer=k;var x,C=function(){function e(){f(this,e),(0,a.unreachable)("Cannot initialize DummyStatTimer.")}return p(e,null,[{key:"time",value:function(e){}},{key:"timeEnd",value:function(e){}},{key:"toString",value:function(){return""}}]),e}();function P(){return"undefined"!=typeof fetch&&"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream}function R(e,t){try{var r=(t?new URL(e,t):new URL(e)).protocol;return"http:"===r||"https:"===r}catch(e){return!1}}t.DummyStatTimer=C;var T=function(){function e(){f(this,e)}return p(e,null,[{key:"toDateObject",value:function(e){if(!e||!(0,a.isString)(e))return null;x||(x=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));var t=x.exec(e);if(!t)return null;var r=parseInt(t[1],10),n=parseInt(t[2],10);n=n>=1&&n<=12?n-1:0;var i=parseInt(t[3],10);i=i>=1&&i<=31?i:1;var o=parseInt(t[4],10);o=o>=0&&o<=23?o:0;var s=parseInt(t[5],10);s=s>=0&&s<=59?s:0;var u=parseInt(t[6],10);u=u>=0&&u<=59?u:0;var c=t[7]||"Z",l=parseInt(t[8],10);l=l>=0&&l<=23?l:0;var h=parseInt(t[9],10)||0;return h=h>=0&&h<=59?h:0,"-"===c?(o+=l,s+=h):"+"===c&&(o-=l,s-=h),new Date(Date.UTC(r,n,i,o,s,u))}}]),e}();t.PDFDateString=T},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FontLoader=t.FontFaceObject=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var p,v=function(){function e(t){var r=t.docId,n=t.onUnsupportedFeature;h(this,e),this.constructor===e&&(0,a.unreachable)("Cannot initialize BaseFontLoader."),this.docId=r,this._onUnsupportedFeature=n,this.nativeFontFaces=[],this.styleElement=null}var t,r;return d(e,[{key:"addNativeFontFace",value:function(e){this.nativeFontFaces.push(e),document.fonts.add(e)}},{key:"insertRule",value:function(e){var t=this.styleElement;t||((t=this.styleElement=document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId),document.documentElement.getElementsByTagName("head")[0].appendChild(t));var r=t.sheet;r.insertRule(e,r.cssRules.length)}},{key:"clear",value:function(){this.nativeFontFaces.forEach((function(e){document.fonts.delete(e)})),this.nativeFontFaces.length=0,this.styleElement&&(this.styleElement.remove(),this.styleElement=null)}},{key:"bind",value:(t=i.default.mark((function e(t){var r,n,o=this;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.attached&&!t.missingFile){e.next=2;break}return e.abrupt("return",void 0);case 2:if(t.attached=!0,!this.isFontLoadingAPISupported){e.next=19;break}if(!(r=t.createNativeFontFace())){e.next=18;break}return this.addNativeFontFace(r),e.prev=7,e.next=10,r.loaded;case 10:e.next=18;break;case 12:throw e.prev=12,e.t0=e.catch(7),this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.font}),(0,a.warn)("Failed to load font '".concat(r.family,"': '").concat(e.t0,"'.")),t.disableFontFace=!0,e.t0;case 18:return e.abrupt("return",void 0);case 19:if(!(n=t.createFontFaceRule())){e.next=25;break}if(this.insertRule(n),!this.isSyncFontLoadingSupported){e.next=24;break}return e.abrupt("return",void 0);case 24:return e.abrupt("return",new Promise((function(e){var r=o._queueLoadingCallback(e);o._prepareFontLoadEvent([n],[t],r)})));case 25:return e.abrupt("return",void 0);case 26:case"end":return e.stop()}}),e,this,[[7,12]])})),r=function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(e){l(a,n,i,o,s,"next",e)}function s(e){l(a,n,i,o,s,"throw",e)}o(void 0)}))},function(e){return r.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function(e){(0,a.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function(e,t,r){(0,a.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function(){(0,a.unreachable)("Abstract method `isFontLoadingAPISupported`.")}},{key:"isSyncFontLoadingSupported",get:function(){(0,a.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function(){(0,a.unreachable)("Abstract method `_loadTestFont`.")}}]),e}();t.FontLoader=p,t.FontLoader=p=function(e){function t(e){var r;return h(this,t),(r=s(this,u(t).call(this,e))).loadingContext={requests:[],nextRequestId:0},r.loadTestFontId=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),d(t,[{key:"_queueLoadingCallback",value:function(e){var t=this.loadingContext,r={id:"pdfjs-font-loading-".concat(t.nextRequestId++),done:!1,complete:function(){for((0,a.assert)(!r.done,"completeRequest() cannot be called twice."),r.done=!0;t.requests.length>0&&t.requests[0].done;){var e=t.requests.shift();setTimeout(e.callback,0)}},callback:e};return t.requests.push(r),r}},{key:"_prepareFontLoadEvent",value:function(e,t,r){function n(e,t){return e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|255&e.charCodeAt(t+3)}function i(e,t,r,n){return e.substring(0,t)+n+e.substring(t+r)}var o,s,u=document.createElement("canvas");u.width=1,u.height=1;var c=u.getContext("2d"),l=0;var h="lt".concat(Date.now()).concat(this.loadTestFontId++),f=this._loadTestFont,d=n(f=i(f,976,h.length,h),16);for(o=0,s=h.length-3;o<s;o+=4)d=d-1482184792+n(h,o)|0;o<h.length&&(d=d-1482184792+n(h+"XXX",o)|0),f=i(f,16,4,(0,a.string32)(d));var p="url(data:font/opentype;base64,".concat(btoa(f),");"),v='@font-face {font-family:"'.concat(h,'";src:').concat(p,"}");this.insertRule(v);var g=[];for(o=0,s=t.length;o<s;o++)g.push(t[o].loadedName);g.push(h);var m=document.createElement("div");for(m.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),o=0,s=g.length;o<s;++o){var y=document.createElement("span");y.textContent="Hi",y.style.fontFamily=g[o],m.appendChild(y)}document.body.appendChild(m),function e(t,r){if(++l>30)return(0,a.warn)("Load test font never loaded."),void r();c.font="30px "+t,c.fillText(".",0,20),c.getImageData(0,0,1,1).data[3]>0?r():setTimeout(e.bind(null,t,r))}(h,(function(){document.body.removeChild(m),r.complete()}))}},{key:"isFontLoadingAPISupported",get:function(){var e="undefined"!=typeof document&&!!document.fonts;if(e&&"undefined"!=typeof navigator){var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);t&&t[1]<63&&(e=!1)}return(0,a.shadow)(this,"isFontLoadingAPISupported",e)}},{key:"isSyncFontLoadingSupported",get:function(){var e=!1;if("undefined"==typeof navigator)e=!0;else{var t=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);t&&t[1]>=14&&(e=!0)}return(0,a.shadow)(this,"isSyncFontLoadingSupported",e)}},{key:"_loadTestFont",get:function(){return(0,a.shadow)(this,"_loadTestFont",atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))}}]),t}(v);var g={get value(){return(0,a.shadow)(this,"value",(0,a.isEvalSupported)())}},m=function(){function e(t,r){var n=r.isEvalSupported,i=void 0===n||n,a=r.disableFontFace,o=void 0!==a&&a,s=r.ignoreErrors,u=void 0!==s&&s,c=r.onUnsupportedFeature,l=void 0===c?null:c,f=r.fontRegistry,d=void 0===f?null:f;for(var p in h(this,e),this.compiledGlyphs=Object.create(null),t)this[p]=t[p];this.isEvalSupported=!1!==i,this.disableFontFace=!0===o,this.ignoreErrors=!0===u,this._onUnsupportedFeature=l,this.fontRegistry=d}return d(e,[{key:"createNativeFontFace",value:function(){if(!this.data||this.disableFontFace)return null;var e=new FontFace(this.loadedName,this.data,{});return this.fontRegistry&&this.fontRegistry.registerFont(this),e}},{key:"createFontFaceRule",value:function(){if(!this.data||this.disableFontFace)return null;var e=(0,a.bytesToString)(new Uint8Array(this.data)),t="url(data:".concat(this.mimetype,";base64,").concat(btoa(e),");"),r='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(t,"}");return this.fontRegistry&&this.fontRegistry.registerFont(this,t),r}},{key:"getPathGenerator",value:function(e,t){if(void 0!==this.compiledGlyphs[t])return this.compiledGlyphs[t];var r,n;try{r=e.get(this.loadedName+"_path_"+t)}catch(e){if(!this.ignoreErrors)throw e;return this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:a.UNSUPPORTED_FEATURES.font}),(0,a.warn)('getPathGenerator - ignoring character: "'.concat(e,'".')),this.compiledGlyphs[t]=function(e,t){}}if(this.isEvalSupported&&g.value){for(var i,o="",s=0,u=r.length;s<u;s++)i=void 0!==(n=r[s]).args?n.args.join(","):"",o+="c."+n.cmd+"("+i+");\n";return this.compiledGlyphs[t]=new Function("c","size",o)}return this.compiledGlyphs[t]=function(e,t){for(var i=0,a=r.length;i<a;i++)"scale"===(n=r[i]).cmd&&(n.args=[t,-t]),e[n.cmd].apply(e,n.args)}}}]),e}();t.FontFaceObject=m},function(e,t,r){"use strict";var n=Object.create(null),i=r(4),a="undefined"!=typeof navigator&&navigator.userAgent||"",o=/Trident/.test(a),s=/CriOS/.test(a);(o||s)&&(n.disableCreateObjectURL=!0),i()&&(n.disableFontFace=!0,n.nativeImageDecoderSupport="none"),t.apiCompatibilityParams=Object.freeze(n)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CanvasGraphics=void 0;var n=r(1),i=r(187),a=16,o={get value(){return(0,n.shadow)(o,"value",(0,n.isLittleEndian)())}};function s(e){e.mozCurrentTransform||(e._originalSave=e.save,e._originalRestore=e.restore,e._originalRotate=e.rotate,e._originalScale=e.scale,e._originalTranslate=e.translate,e._originalTransform=e.transform,e._originalSetTransform=e.setTransform,e._transformMatrix=e._transformMatrix||[1,0,0,1,0,0],e._transformStack=[],Object.defineProperty(e,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(e,"mozCurrentTransformInverse",{get:function(){var e=this._transformMatrix,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],s=t*i-r*n,u=r*n-t*i;return[i/s,r/u,n/u,t/s,(i*a-n*o)/u,(r*a-t*o)/s]}}),e.save=function(){var e=this._transformMatrix;this._transformStack.push(e),this._transformMatrix=e.slice(0,6),this._originalSave()},e.restore=function(){var e=this._transformStack.pop();e&&(this._transformMatrix=e,this._originalRestore())},e.translate=function(e,t){var r=this._transformMatrix;r[4]=r[0]*e+r[2]*t+r[4],r[5]=r[1]*e+r[3]*t+r[5],this._originalTranslate(e,t)},e.scale=function(e,t){var r=this._transformMatrix;r[0]=r[0]*e,r[1]=r[1]*e,r[2]=r[2]*t,r[3]=r[3]*t,this._originalScale(e,t)},e.transform=function(t,r,n,i,a,o){var s=this._transformMatrix;this._transformMatrix=[s[0]*t+s[2]*r,s[1]*t+s[3]*r,s[0]*n+s[2]*i,s[1]*n+s[3]*i,s[0]*a+s[2]*o+s[4],s[1]*a+s[3]*o+s[5]],e._originalTransform(t,r,n,i,a,o)},e.setTransform=function(t,r,n,i,a,o){this._transformMatrix=[t,r,n,i,a,o],e._originalSetTransform(t,r,n,i,a,o)},e.rotate=function(e){var t=Math.cos(e),r=Math.sin(e),n=this._transformMatrix;this._transformMatrix=[n[0]*t+n[2]*r,n[1]*t+n[3]*r,n[0]*-r+n[2]*t,n[1]*-r+n[3]*t,n[4],n[5]],this._originalRotate(e)})}var u=function(){function e(e){this.canvasFactory=e,this.cache=Object.create(null)}return e.prototype={getCanvas:function(e,t,r,n){var i;return void 0!==this.cache[e]?(i=this.cache[e],this.canvasFactory.reset(i,t,r),i.context.setTransform(1,0,0,1,0,0)):(i=this.canvasFactory.create(t,r),this.cache[e]=i),n&&s(i.context),i},clear:function(){for(var e in this.cache){var t=this.cache[e];this.canvasFactory.destroy(t),delete this.cache[e]}}},e}();var c=function(){function e(){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=n.IDENTITY_MATRIX,this.textMatrixScale=1,this.fontMatrix=n.FONT_IDENTITY_MATRIX,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=n.TextRenderingMode.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null}return e.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(e,t){this.x=e,this.y=t}},e}(),l=function(){function e(e,t,r,n,i,a){this.ctx=e,this.current=new c,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=t,this.objs=r,this.canvasFactory=n,this.webGLContext=i,this.imageLayer=a,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new u(this.canvasFactory),e&&s(e),this._cachedGetSinglePixelWidth=null}function t(e,t){if("undefined"!=typeof ImageData&&t instanceof ImageData)e.putImageData(t,0,0);else{var r,i,s,u,c,l=t.height,h=t.width,f=l%a,d=(l-f)/a,p=0===f?d:d+1,v=e.createImageData(h,a),g=0,m=t.data,y=v.data;if(t.kind===n.ImageKind.GRAYSCALE_1BPP){var b=m.byteLength,_=new Uint32Array(y.buffer,0,y.byteLength>>2),A=_.length,S=h+7>>3,w=4294967295,k=o.value?4278190080:255;for(i=0;i<p;i++){for(u=i<d?a:f,r=0,s=0;s<u;s++){for(var x=b-g,C=0,P=x>S?h:8*x-7,R=-8&P,T=0,E=0;C<R;C+=8)E=m[g++],_[r++]=128&E?w:k,_[r++]=64&E?w:k,_[r++]=32&E?w:k,_[r++]=16&E?w:k,_[r++]=8&E?w:k,_[r++]=4&E?w:k,_[r++]=2&E?w:k,_[r++]=1&E?w:k;for(;C<P;C++)0===T&&(E=m[g++],T=128),_[r++]=E&T?w:k,T>>=1}for(;r<A;)_[r++]=0;e.putImageData(v,0,i*a)}}else if(t.kind===n.ImageKind.RGBA_32BPP){for(s=0,c=h*a*4,i=0;i<d;i++)y.set(m.subarray(g,g+c)),g+=c,e.putImageData(v,0,s),s+=a;i<p&&(c=h*f*4,y.set(m.subarray(g,g+c)),e.putImageData(v,0,s))}else{if(t.kind!==n.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(t.kind));for(c=h*(u=a),i=0;i<p;i++){for(i>=d&&(c=h*(u=f)),r=0,s=c;s--;)y[r++]=m[g++],y[r++]=m[g++],y[r++]=m[g++],y[r++]=255;e.putImageData(v,0,i*a)}}}}function r(e,t){for(var r=t.height,n=t.width,i=r%a,o=(r-i)/a,s=0===i?o:o+1,u=e.createImageData(n,a),c=0,l=t.data,h=u.data,f=0;f<s;f++){for(var d=f<o?a:i,p=3,v=0;v<d;v++)for(var g=0,m=0;m<n;m++){if(!g){var y=l[c++];g=128}h[p]=y&g?0:255,p+=4,g>>=1}e.putImageData(u,0,f*a)}}function l(e,t){for(var r=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],n=0,i=r.length;n<i;n++){var a=r[n];void 0!==e[a]&&(t[a]=e[a])}void 0!==e.setLineDash&&(t.setLineDash(e.getLineDash()),t.lineDashOffset=e.lineDashOffset)}function h(e){e.strokeStyle="#000000",e.fillStyle="#000000",e.fillRule="nonzero",e.globalAlpha=1,e.lineWidth=1,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=10,e.globalCompositeOperation="source-over",e.font="10px sans-serif",void 0!==e.setLineDash&&(e.setLineDash([]),e.lineDashOffset=0)}function f(e,t,r,n){for(var i=e.length,a=3;a<i;a+=4){var o=e[a];if(0===o)e[a-3]=t,e[a-2]=r,e[a-1]=n;else if(o<255){var s=255-o;e[a-3]=e[a-3]*o+t*s>>8,e[a-2]=e[a-2]*o+r*s>>8,e[a-1]=e[a-1]*o+n*s>>8}}}function d(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=r?r[e[i]]:e[i];t[i]=t[i]*a*(1/255)|0}}function p(e,t,r){for(var n=e.length,i=3;i<n;i+=4){var a=77*e[i-3]+152*e[i-2]+28*e[i-1];t[i]=r?t[i]*r[a>>8]>>8:t[i]*a>>16}}function v(e,t,r,n){var i=t.canvas,a=t.context;e.setTransform(t.scaleX,0,0,t.scaleY,t.offsetX,t.offsetY);var o=t.backdrop||null;if(!t.transferMap&&n.isEnabled){var s=n.composeSMask({layer:r.canvas,mask:i,properties:{subtype:t.subtype,backdrop:o}});return e.setTransform(1,0,0,1,0,0),void e.drawImage(s,t.offsetX,t.offsetY)}!function(e,t,r,n,i,a,o){var s,u=!!a,c=u?a[0]:0,l=u?a[1]:0,h=u?a[2]:0;s="Luminosity"===i?p:d;for(var v=Math.min(n,Math.ceil(1048576/r)),g=0;g<n;g+=v){var m=Math.min(v,n-g),y=e.getImageData(0,g,r,m),b=t.getImageData(0,g,r,m);u&&f(y.data,c,l,h),s(y.data,b.data,o),e.putImageData(b,0,g)}}(a,r,i.width,i.height,t.subtype,o,t.transferMap),e.drawImage(i,0,0)}var g=["butt","round","square"],m=["miter","round","bevel"],y={},b={};for(var _ in e.prototype={beginDrawing:function(e){var t=e.transform,r=e.viewport,n=e.transparency,i=void 0!==n&&n,a=e.background,o=void 0===a?null:a,s=this.ctx.canvas.width,u=this.ctx.canvas.height;if(this.ctx.save(),this.ctx.fillStyle=o||"rgb(255, 255, 255)",this.ctx.fillRect(0,0,s,u),this.ctx.restore(),i){var c=this.cachedCanvases.getCanvas("transparent",s,u,!0);this.compositeCtx=this.ctx,this.transparentCanvas=c.canvas,this.ctx=c.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),h(this.ctx),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,r.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(e,t,r,i){var a=e.argsArray,o=e.fnArray,s=t||0,u=a.length;if(u===s)return s;for(var c,l=u-s>10&&"function"==typeof r,h=l?Date.now()+15:0,f=0,d=this.commonObjs,p=this.objs;;){if(void 0!==i&&s===i.nextBreakPoint)return i.breakIt(s,r),s;if((c=o[s])!==n.OPS.dependency)this[c].apply(this,a[s]);else{var v=!0,g=!1,m=void 0;try{for(var y,b=a[s][Symbol.iterator]();!(v=(y=b.next()).done);v=!0){var _=y.value,A=_.startsWith("g_")?d:p;if(!A.has(_))return A.get(_,r),s}}catch(e){g=!0,m=e}finally{try{v||null==b.return||b.return()}finally{if(g)throw m}}}if(++s===u)return s;if(l&&++f>10){if(Date.now()>h)return r(),s;f=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),this.webGLContext.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(e){this.current.lineWidth=e,this.ctx.lineWidth=e},setLineCap:function(e){this.ctx.lineCap=g[e]},setLineJoin:function(e){this.ctx.lineJoin=m[e]},setMiterLimit:function(e){this.ctx.miterLimit=e},setDash:function(e,t){var r=this.ctx;void 0!==r.setLineDash&&(r.setLineDash(e),r.lineDashOffset=t)},setRenderingIntent:function(e){},setFlatness:function(e){},setGState:function(e){for(var t=0,r=e.length;t<r;t++){var n=e[t],i=n[0],a=n[1];switch(i){case"LW":this.setLineWidth(a);break;case"LC":this.setLineCap(a);break;case"LJ":this.setLineJoin(a);break;case"ML":this.setMiterLimit(a);break;case"D":this.setDash(a[0],a[1]);break;case"RI":this.setRenderingIntent(a);break;case"FL":this.setFlatness(a);break;case"Font":this.setFont(a[0],a[1]);break;case"CA":this.current.strokeAlpha=n[1];break;case"ca":this.current.fillAlpha=n[1],this.ctx.globalAlpha=n[1];break;case"BM":this.ctx.globalCompositeOperation=a;break;case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var e=this.current.activeSMask,t=e.canvas.width,r=e.canvas.height,n="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(n,t,r,!0),a=this.ctx,o=a.mozCurrentTransform;this.ctx.save();var s=i.context;s.scale(1/e.scaleX,1/e.scaleY),s.translate(-e.offsetX,-e.offsetY),s.transform.apply(s,o),e.startTransformInverse=s.mozCurrentTransformInverse,l(a,s),this.ctx=s,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(a),this.groupLevel++},suspendSMaskGroup:function(){var e=this.ctx;this.groupLevel--,this.ctx=this.groupStack.pop(),v(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),this.ctx.save(),l(e,this.ctx),this.current.resumeSMaskCtx=e;var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform);this.ctx.transform.apply(this.ctx,t),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()},resumeSMaskGroup:function(){var e=this.current.resumeSMaskCtx,t=this.ctx;this.ctx=e,this.groupStack.push(t),this.groupLevel++},endSMaskGroup:function(){var e=this.ctx;this.groupLevel--,this.ctx=this.groupStack.pop(),v(this.ctx,this.current.activeSMask,e,this.webGLContext),this.ctx.restore(),l(e,this.ctx);var t=n.Util.transform(this.current.activeSMask.startTransformInverse,e.mozCurrentTransform);this.ctx.transform.apply(this.ctx,t)},save:function(){this.ctx.save();var e=this.current;this.stateStack.push(e),this.current=e.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this._cachedGetSinglePixelWidth=null)},transform:function(e,t,r,n,i,a){this.ctx.transform(e,t,r,n,i,a),this._cachedGetSinglePixelWidth=null},constructPath:function(e,t){for(var r=this.ctx,i=this.current,a=i.x,o=i.y,s=0,u=0,c=e.length;s<c;s++)switch(0|e[s]){case n.OPS.rectangle:a=t[u++],o=t[u++];var l=t[u++],h=t[u++];0===l&&(l=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth());var f=a+l,d=o+h;this.ctx.moveTo(a,o),this.ctx.lineTo(f,o),this.ctx.lineTo(f,d),this.ctx.lineTo(a,d),this.ctx.lineTo(a,o),this.ctx.closePath();break;case n.OPS.moveTo:a=t[u++],o=t[u++],r.moveTo(a,o);break;case n.OPS.lineTo:a=t[u++],o=t[u++],r.lineTo(a,o);break;case n.OPS.curveTo:a=t[u+4],o=t[u+5],r.bezierCurveTo(t[u],t[u+1],t[u+2],t[u+3],a,o),u+=6;break;case n.OPS.curveTo2:r.bezierCurveTo(a,o,t[u],t[u+1],t[u+2],t[u+3]),a=t[u+2],o=t[u+3],u+=4;break;case n.OPS.curveTo3:a=t[u+2],o=t[u+3],r.bezierCurveTo(t[u],t[u+1],a,o,a,o),u+=4;break;case n.OPS.closePath:r.closePath()}i.setCurrentPoint(a,o)},closePath:function(){this.ctx.closePath()},stroke:function(e){e=void 0===e||e;var t=this.ctx,r=this.current.strokeColor;if(t.globalAlpha=this.current.strokeAlpha,r&&r.hasOwnProperty("type")&&"Pattern"===r.type){t.save();var i=t.mozCurrentTransform,a=n.Util.singularValueDecompose2dScale(i)[0];t.strokeStyle=r.getPattern(t,this),t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth*a),t.stroke(),t.restore()}else t.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth),t.stroke();e&&this.consumePath(),t.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(e){e=void 0===e||e;var t=this.ctx,r=this.current.fillColor,n=!1;this.current.patternFill&&(t.save(),this.baseTransform&&t.setTransform.apply(t,this.baseTransform),t.fillStyle=r.getPattern(t,this),n=!0),this.pendingEOFill?(t.fill("evenodd"),this.pendingEOFill=!1):t.fill(),n&&t.restore(),e&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=y},eoClip:function(){this.pendingClip=b},beginText:function(){this.current.textMatrix=n.IDENTITY_MATRIX,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var e=this.pendingTextPaths,t=this.ctx;if(void 0!==e){t.save(),t.beginPath();for(var r=0;r<e.length;r++){var n=e[r];t.setTransform.apply(t,n.transform),t.translate(n.x,n.y),n.addToPath(t,n.fontSize)}t.restore(),t.clip(),t.beginPath(),delete this.pendingTextPaths}else t.beginPath()},setCharSpacing:function(e){this.current.charSpacing=e},setWordSpacing:function(e){this.current.wordSpacing=e},setHScale:function(e){this.current.textHScale=e/100},setLeading:function(e){this.current.leading=-e},setFont:function(e,t){var r=this.commonObjs.get(e),i=this.current;if(!r)throw new Error("Can't find font for ".concat(e));if(i.fontMatrix=r.fontMatrix?r.fontMatrix:n.FONT_IDENTITY_MATRIX,0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||(0,n.warn)("Invalid font matrix for font "+e),t<0?(t=-t,i.fontDirection=-1):i.fontDirection=1,this.current.font=r,this.current.fontSize=t,!r.isType3Font){var a=r.loadedName||"sans-serif",o=r.black?"900":r.bold?"bold":"normal",s=r.italic?"italic":"normal",u='"'.concat(a,'", ').concat(r.fallbackName),c=t<16?16:t>100?100:t;this.current.fontSizeScale=t/c,this.ctx.font="".concat(s," ").concat(o," ").concat(c,"px ").concat(u)}},setTextRenderingMode:function(e){this.current.textRenderingMode=e},setTextRise:function(e){this.current.textRise=e},moveText:function(e,t){this.current.x=this.current.lineX+=e,this.current.y=this.current.lineY+=t},setLeadingMoveText:function(e,t){this.setLeading(-t),this.moveText(e,t)},setTextMatrix:function(e,t,r,n,i,a){this.current.textMatrix=[e,t,r,n,i,a],this.current.textMatrixScale=Math.sqrt(e*e+t*t),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(e,t,r,i){var a,o=this.ctx,s=this.current,u=s.font,c=s.textRenderingMode,l=s.fontSize/s.fontSizeScale,h=c&n.TextRenderingMode.FILL_STROKE_MASK,f=!!(c&n.TextRenderingMode.ADD_TO_PATH_FLAG),d=s.patternFill&&u.data;((u.disableFontFace||f||d)&&(a=u.getPathGenerator(this.commonObjs,e)),u.disableFontFace||d?(o.save(),o.translate(t,r),o.beginPath(),a(o,l),i&&o.setTransform.apply(o,i),h!==n.TextRenderingMode.FILL&&h!==n.TextRenderingMode.FILL_STROKE||o.fill(),h!==n.TextRenderingMode.STROKE&&h!==n.TextRenderingMode.FILL_STROKE||o.stroke(),o.restore()):(h!==n.TextRenderingMode.FILL&&h!==n.TextRenderingMode.FILL_STROKE||o.fillText(e,t,r),h!==n.TextRenderingMode.STROKE&&h!==n.TextRenderingMode.FILL_STROKE||o.strokeText(e,t,r)),f)&&(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:o.mozCurrentTransform,x:t,y:r,fontSize:l,addToPath:a})},get isFontSubpixelAAEnabled(){var e=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context;e.scale(1.5,1),e.fillText("I",0,10);for(var t=e.getImageData(0,0,10,10).data,r=!1,i=3;i<t.length;i+=4)if(t[i]>0&&t[i]<255){r=!0;break}return(0,n.shadow)(this,"isFontSubpixelAAEnabled",r)},showText:function(e){var t=this.current,r=t.font;if(r.isType3Font)return this.showType3Text(e);var i=t.fontSize;if(0!==i){var a,o=this.ctx,s=t.fontSizeScale,u=t.charSpacing,c=t.wordSpacing,l=t.fontDirection,h=t.textHScale*l,f=e.length,d=r.vertical,p=d?1:-1,v=r.defaultVMetrics,g=i*t.fontMatrix[0],m=t.textRenderingMode===n.TextRenderingMode.FILL&&!r.disableFontFace&&!t.patternFill;if(o.save(),t.patternFill){o.save();var y=t.fillColor.getPattern(o,this);a=o.mozCurrentTransform,o.restore(),o.fillStyle=y}o.transform.apply(o,t.textMatrix),o.translate(t.x,t.y+t.textRise),l>0?o.scale(h,-1):o.scale(h,1);var b=t.lineWidth,_=t.textMatrixScale;if(0===_||0===b){var A=t.textRenderingMode&n.TextRenderingMode.FILL_STROKE_MASK;A!==n.TextRenderingMode.STROKE&&A!==n.TextRenderingMode.FILL_STROKE||(this._cachedGetSinglePixelWidth=null,b=.65*this.getSinglePixelWidth())}else b/=_;1!==s&&(o.scale(s,s),b/=s),o.lineWidth=b;var S,w=0;for(S=0;S<f;++S){var k=e[S];if((0,n.isNum)(k))w+=p*k*i/1e3;else{var x,C,P,R,T,E,O,L=!1,F=(k.isSpace?c:0)+u,I=k.fontChar,j=k.accent,M=k.width;if(d)T=k.vmetric||v,E=-(E=k.vmetric?T[1]:.5*M)*g,O=T[2]*g,M=T?-T[0]:M,x=E/s,C=(w+O)/s;else x=w/s,C=0;if(r.remeasure&&M>0){var N=1e3*o.measureText(I).width/i*s;if(M<N&&this.isFontSubpixelAAEnabled){var D=M/N;L=!0,o.save(),o.scale(D,1),x/=D}else M!==N&&(x+=(M-N)/2e3*i/s)}(k.isInFont||r.missingFile)&&(m&&!j?o.fillText(I,x,C):(this.paintChar(I,x,C,a),j&&(P=x+j.offset.x/s,R=C-j.offset.y/s,this.paintChar(j.fontChar,P,R,a)))),w+=M*g+F*l,L&&o.restore()}}d?t.y-=w*h:t.x+=w*h,o.restore()}},showType3Text:function(e){var t,r,i,a,o=this.ctx,s=this.current,u=s.font,c=s.fontSize,l=s.fontDirection,h=u.vertical?1:-1,f=s.charSpacing,d=s.wordSpacing,p=s.textHScale*l,v=s.fontMatrix||n.FONT_IDENTITY_MATRIX,g=e.length;if(!(s.textRenderingMode===n.TextRenderingMode.INVISIBLE)&&0!==c){for(this._cachedGetSinglePixelWidth=null,o.save(),o.transform.apply(o,s.textMatrix),o.translate(s.x,s.y),o.scale(p,l),t=0;t<g;++t)if(r=e[t],(0,n.isNum)(r))a=h*r*c/1e3,this.ctx.translate(a,0),s.x+=a*p;else{var m=(r.isSpace?d:0)+f,y=u.charProcOperatorList[r.operatorListId];if(y)this.processingType3=r,this.save(),o.scale(c,c),o.transform.apply(o,v),this.executeOperatorList(y),this.restore(),i=n.Util.applyTransform([r.width,0],v)[0]*c+m,o.translate(i,0),s.x+=i*p;else(0,n.warn)('Type3 character "'.concat(r.operatorListId,'" is not available.'))}o.restore(),this.processingType3=null}},setCharWidth:function(e,t){},setCharWidthAndBounds:function(e,t,r,n,i,a){this.ctx.rect(r,n,i-r,a-n),this.clip(),this.endPath()},getColorN_Pattern:function(t){var r,n=this;if("TilingPattern"===t[0]){var a=t[1],o=this.baseTransform||this.ctx.mozCurrentTransform.slice(),s={createCanvasGraphics:function(t){return new e(t,n.commonObjs,n.objs,n.canvasFactory,n.webGLContext)}};r=new i.TilingPattern(t,a,this.ctx,s,o)}else r=(0,i.getShadingPatternFromIR)(t);return r},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r);this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(e,t,r){var i=n.Util.makeCssRgb(e,t,r);this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(e){var t=this.ctx;this.save();var r=(0,i.getShadingPatternFromIR)(e);t.fillStyle=r.getPattern(t,this,!0);var a=t.mozCurrentTransformInverse;if(a){var o=t.canvas,s=o.width,u=o.height,c=n.Util.applyTransform([0,0],a),l=n.Util.applyTransform([0,u],a),h=n.Util.applyTransform([s,0],a),f=n.Util.applyTransform([s,u],a),d=Math.min(c[0],l[0],h[0],f[0]),p=Math.min(c[1],l[1],h[1],f[1]),v=Math.max(c[0],l[0],h[0],f[0]),g=Math.max(c[1],l[1],h[1],f[1]);this.ctx.fillRect(d,p,v-d,g-p)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10);this.restore()},beginInlineImage:function(){(0,n.unreachable)("Should not call beginInlineImage")},beginImageData:function(){(0,n.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function(e,t){if(this.save(),this.baseTransformStack.push(this.baseTransform),Array.isArray(e)&&6===e.length&&this.transform.apply(this,e),this.baseTransform=this.ctx.mozCurrentTransform,t){var r=t[2]-t[0],n=t[3]-t[1];this.ctx.rect(t[0],t[1],r,n),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(e){this.save();var t=this.ctx;e.isolated||(0,n.info)("TODO: Support non-isolated groups."),e.knockout&&(0,n.warn)("Knockout groups not supported.");var r=t.mozCurrentTransform;if(e.matrix&&t.transform.apply(t,e.matrix),!e.bbox)throw new Error("Bounding box is required.");var i=n.Util.getAxialAlignedBoundingBox(e.bbox,t.mozCurrentTransform),a=[0,0,t.canvas.width,t.canvas.height];i=n.Util.intersect(i,a)||[0,0,0,0];var o=Math.floor(i[0]),s=Math.floor(i[1]),u=Math.max(Math.ceil(i[2])-o,1),c=Math.max(Math.ceil(i[3])-s,1),h=1,f=1;u>4096&&(h=u/4096,u=4096),c>4096&&(f=c/4096,c=4096);var d="groupAt"+this.groupLevel;e.smask&&(d+="_smask_"+this.smaskCounter++%2);var p=this.cachedCanvases.getCanvas(d,u,c,!0),v=p.context;v.scale(1/h,1/f),v.translate(-o,-s),v.transform.apply(v,r),e.smask?this.smaskStack.push({canvas:p.canvas,context:v,offsetX:o,offsetY:s,scaleX:h,scaleY:f,subtype:e.smask.subtype,backdrop:e.smask.backdrop,transferMap:e.smask.transferMap||null,startTransformInverse:null}):(t.setTransform(1,0,0,1,0,0),t.translate(o,s),t.scale(h,f)),l(t,v),this.ctx=v,this.setGState([["BM","source-over"],["ca",1],["CA",1]]),this.groupStack.push(t),this.groupLevel++,this.current.activeSMask=null},endGroup:function(e){this.groupLevel--;var t=this.ctx;this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,e.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(t.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(e,t,r){if(this.save(),h(this.ctx),this.current=new c,Array.isArray(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1];this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}this.transform.apply(this,t),this.transform.apply(this,r)},endAnnotation:function(){this.restore()},paintJpegXObject:function(e,t,r){var i=this.processingType3?this.commonObjs.get(e):this.objs.get(e);if(i){this.save();var a=this.ctx;if(a.scale(1/t,-1/r),a.drawImage(i,0,0,i.width,i.height,0,-r,t,r),this.imageLayer){var o=a.mozCurrentTransformInverse,s=this.getCanvasPosition(0,0);this.imageLayer.appendImage({objId:e,left:s[0],top:s[1],width:t/o[0],height:r/o[3]})}this.restore()}else(0,n.warn)("Dependent image isn't ready yet")},paintImageMaskXObject:function(e){var t=this.ctx,n=e.width,i=e.height,a=this.current.fillColor,o=this.current.patternFill,s=this.processingType3;if(s&&void 0===s.compiled&&(s.compiled=n<=1e3&&i<=1e3?function(e){var t,r,n,i,a=e.width,o=e.height,s=a+1,u=new Uint8Array(s*(o+1)),c=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),l=a+7&-8,h=e.data,f=new Uint8Array(l*o),d=0;for(t=0,i=h.length;t<i;t++)for(var p=128,v=h[t];p>0;)f[d++]=v&p?0:255,p>>=1;var g=0;for(0!==f[d=0]&&(u[0]=1,++g),r=1;r<a;r++)f[d]!==f[d+1]&&(u[r]=f[d]?2:1,++g),d++;for(0!==f[d]&&(u[r]=2,++g),t=1;t<o;t++){n=t*s,f[(d=t*l)-l]!==f[d]&&(u[n]=f[d]?1:8,++g);var m=(f[d]?4:0)+(f[d-l]?8:0);for(r=1;r<a;r++)c[m=(m>>2)+(f[d+1]?4:0)+(f[d-l+1]?8:0)]&&(u[n+r]=c[m],++g),d++;if(f[d-l]!==f[d]&&(u[n+r]=f[d]?2:4,++g),g>1e3)return null}for(n=t*s,0!==f[d=l*(o-1)]&&(u[n]=8,++g),r=1;r<a;r++)f[d]!==f[d+1]&&(u[n+r]=f[d]?4:8,++g),d++;if(0!==f[d]&&(u[n+r]=4,++g),g>1e3)return null;var y=new Int32Array([0,s,-1,0,-s,0,0,0,1]),b=[];for(t=0;g&&t<=o;t++){for(var _=t*s,A=_+a;_<A&&!u[_];)_++;if(_!==A){var S,w=[_%s,t],k=u[_],x=_;do{var C=y[k];do{_+=C}while(!u[_]);5!==(S=u[_])&&10!==S?(k=S,u[_]=0):(k=S&51*k>>4,u[_]&=k>>2|k<<2),w.push(_%s),w.push(_/s|0),u[_]||--g}while(x!==_);b.push(w),--t}}return function(e){e.save(),e.scale(1/a,-1/o),e.translate(0,-o),e.beginPath();for(var t=0,r=b.length;t<r;t++){var n=b[t];e.moveTo(n[0],n[1]);for(var i=2,s=n.length;i<s;i+=2)e.lineTo(n[i],n[i+1])}e.fill(),e.beginPath(),e.restore()}}({data:e.data,width:n,height:i}):null),s&&s.compiled)s.compiled(t);else{var u=this.cachedCanvases.getCanvas("maskCanvas",n,i),c=u.context;c.save(),r(c,e),c.globalCompositeOperation="source-in",c.fillStyle=o?a.getPattern(c,this):a,c.fillRect(0,0,n,i),c.restore(),this.paintInlineImageXObject(u.canvas)}},paintImageMaskXObjectRepeat:function(e,t,n,i){var a=e.width,o=e.height,s=this.current.fillColor,u=this.current.patternFill,c=this.cachedCanvases.getCanvas("maskCanvas",a,o),l=c.context;l.save(),r(l,e),l.globalCompositeOperation="source-in",l.fillStyle=u?s.getPattern(l,this):s,l.fillRect(0,0,a,o),l.restore();for(var h=this.ctx,f=0,d=i.length;f<d;f+=2)h.save(),h.transform(t,0,0,n,i[f],i[f+1]),h.scale(1,-1),h.drawImage(c.canvas,0,0,a,o,0,-1,1,1),h.restore()},paintImageMaskXObjectGroup:function(e){for(var t=this.ctx,n=this.current.fillColor,i=this.current.patternFill,a=0,o=e.length;a<o;a++){var s=e[a],u=s.width,c=s.height,l=this.cachedCanvases.getCanvas("maskCanvas",u,c),h=l.context;h.save(),r(h,s),h.globalCompositeOperation="source-in",h.fillStyle=i?n.getPattern(h,this):n,h.fillRect(0,0,u,c),h.restore(),t.save(),t.transform.apply(t,s.transform),t.scale(1,-1),t.drawImage(l.canvas,0,0,u,c,0,-1,1,1),t.restore()}},paintImageXObject:function(e){var t=this.processingType3?this.commonObjs.get(e):this.objs.get(e);t?this.paintInlineImageXObject(t):(0,n.warn)("Dependent image isn't ready yet")},paintImageXObjectRepeat:function(e,t,r,i){var a=this.processingType3?this.commonObjs.get(e):this.objs.get(e);if(a){for(var o=a.width,s=a.height,u=[],c=0,l=i.length;c<l;c+=2)u.push({transform:[t,0,0,r,i[c],i[c+1]],x:0,y:0,w:o,h:s});this.paintInlineImageXObjectGroup(a,u)}else(0,n.warn)("Dependent image isn't ready yet")},paintInlineImageXObject:function(e){var r=e.width,n=e.height,i=this.ctx;this.save(),i.scale(1/r,-1/n);var a,o,s=i.mozCurrentTransformInverse,u=s[0],c=s[1],l=Math.max(Math.sqrt(u*u+c*c),1),h=s[2],f=s[3],d=Math.max(Math.sqrt(h*h+f*f),1);if("function"==typeof HTMLElement&&e instanceof HTMLElement||!e.data)a=e;else{var p=(o=this.cachedCanvases.getCanvas("inlineImage",r,n)).context;t(p,e),a=o.canvas}for(var v=r,g=n,m="prescale1";l>2&&v>1||d>2&&g>1;){var y=v,b=g;l>2&&v>1&&(l/=v/(y=Math.ceil(v/2))),d>2&&g>1&&(d/=g/(b=Math.ceil(g/2))),(p=(o=this.cachedCanvases.getCanvas(m,y,b)).context).clearRect(0,0,y,b),p.drawImage(a,0,0,v,g,0,0,y,b),a=o.canvas,v=y,g=b,m="prescale1"===m?"prescale2":"prescale1"}if(i.drawImage(a,0,0,v,g,0,-n,r,n),this.imageLayer){var _=this.getCanvasPosition(0,-n);this.imageLayer.appendImage({imgData:e,left:_[0],top:_[1],width:r/s[0],height:n/s[3]})}this.restore()},paintInlineImageXObjectGroup:function(e,r){var n=this.ctx,i=e.width,a=e.height,o=this.cachedCanvases.getCanvas("inlineImage",i,a);t(o.context,e);for(var s=0,u=r.length;s<u;s++){var c=r[s];if(n.save(),n.transform.apply(n,c.transform),n.scale(1,-1),n.drawImage(o.canvas,c.x,c.y,c.w,c.h,0,-1,1,1),this.imageLayer){var l=this.getCanvasPosition(c.x,c.y);this.imageLayer.appendImage({imgData:e,left:l[0],top:l[1],width:i,height:a})}n.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){(0,n.warn)("Unsupported 'paintXObject' command.")},markPoint:function(e){},markPointProps:function(e,t){},beginMarkedContent:function(e){},beginMarkedContentProps:function(e,t){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var e=this.ctx;this.pendingClip&&(this.pendingClip===b?e.clip("evenodd"):e.clip(),this.pendingClip=null),e.beginPath()},getSinglePixelWidth:function(e){if(null===this._cachedGetSinglePixelWidth){var t=this.ctx.mozCurrentTransformInverse;this._cachedGetSinglePixelWidth=Math.sqrt(Math.max(t[0]*t[0]+t[1]*t[1],t[2]*t[2]+t[3]*t[3]))}return this._cachedGetSinglePixelWidth},getCanvasPosition:function(e,t){var r=this.ctx.mozCurrentTransform;return[r[0]*e+r[2]*t+r[4],r[1]*e+r[3]*t+r[5]]}},n.OPS)e.prototype[n.OPS[_]]=e.prototype[_];return e}();t.CanvasGraphics=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getShadingPatternFromIR=function(e){var t=i[e[0]];if(!t)throw new Error("Unknown IR type: ".concat(e[0]));return t.fromIR(e)},t.TilingPattern=void 0;var n=r(1),i={};function a(e,t){if(t&&"undefined"!=typeof Path2D){var r=t[2]-t[0],n=t[3]-t[1],i=new Path2D;i.rect(t[0],t[1],r,n),e.clip(i)}}i.RadialAxial={fromIR:function(e){var t=e[1],r=e[2],n=e[3],i=e[4],o=e[5],s=e[6],u=e[7];return{type:"Pattern",getPattern:function(e){var c;a(e,r),"axial"===t?c=e.createLinearGradient(i[0],i[1],o[0],o[1]):"radial"===t&&(c=e.createRadialGradient(i[0],i[1],s,o[0],o[1],u));for(var l=0,h=n.length;l<h;++l){var f=n[l];c.addColorStop(f[0],f[1])}return c}}}};var o=function(){function e(e,t,r,n,i,a,o,s){var u,c=t.coords,l=t.colors,h=e.data,f=4*e.width;c[r+1]>c[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u),c[n+1]>c[i+1]&&(u=n,n=i,i=u,u=o,o=s,s=u),c[r+1]>c[n+1]&&(u=r,r=n,n=u,u=a,a=o,o=u);var d=(c[r]+t.offsetX)*t.scaleX,p=(c[r+1]+t.offsetY)*t.scaleY,v=(c[n]+t.offsetX)*t.scaleX,g=(c[n+1]+t.offsetY)*t.scaleY,m=(c[i]+t.offsetX)*t.scaleX,y=(c[i+1]+t.offsetY)*t.scaleY;if(!(p>=y))for(var b,_,A,S,w,k,x,C,P,R=l[a],T=l[a+1],E=l[a+2],O=l[o],L=l[o+1],F=l[o+2],I=l[s],j=l[s+1],M=l[s+2],N=Math.round(p),D=Math.round(y),q=N;q<=D;q++){q<g?(b=d-(d-v)*(P=q<p?0:p===g?1:(p-q)/(p-g)),_=R-(R-O)*P,A=T-(T-L)*P,S=E-(E-F)*P):(b=v-(v-m)*(P=q>y?1:g===y?0:(g-q)/(g-y)),_=O-(O-I)*P,A=L-(L-j)*P,S=F-(F-M)*P),w=d-(d-m)*(P=q<p?0:q>y?1:(p-q)/(p-y)),k=R-(R-I)*P,x=T-(T-j)*P,C=E-(E-M)*P;for(var U=Math.round(Math.min(b,w)),W=Math.round(Math.max(b,w)),B=f*q+4*U,z=U;z<=W;z++)P=(P=(b-z)/(b-w))<0?0:P>1?1:P,h[B++]=_-(_-k)*P|0,h[B++]=A-(A-x)*P|0,h[B++]=S-(S-C)*P|0,h[B++]=255}}function t(t,r,n){var i,a,o=r.coords,s=r.colors;switch(r.type){case"lattice":var u=r.verticesPerRow,c=Math.floor(o.length/u)-1,l=u-1;for(i=0;i<c;i++)for(var h=i*u,f=0;f<l;f++,h++)e(t,n,o[h],o[h+1],o[h+u],s[h],s[h+1],s[h+u]),e(t,n,o[h+u+1],o[h+1],o[h+u],s[h+u+1],s[h+1],s[h+u]);break;case"triangles":for(i=0,a=o.length;i<a;i+=3)e(t,n,o[i],o[i+1],o[i+2],s[i],s[i+1],s[i+2]);break;default:throw new Error("illegal figure")}}return function(e,r,n,i,a,o,s,u){var c,l,h,f,d=Math.floor(e[0]),p=Math.floor(e[1]),v=Math.ceil(e[2])-d,g=Math.ceil(e[3])-p,m=Math.min(Math.ceil(Math.abs(v*r[0]*1.1)),3e3),y=Math.min(Math.ceil(Math.abs(g*r[1]*1.1)),3e3),b=v/m,_=g/y,A={coords:n,colors:i,offsetX:-d,offsetY:-p,scaleX:1/b,scaleY:1/_},S=m+4,w=y+4;if(u.isEnabled)c=u.drawFigures({width:m,height:y,backgroundColor:o,figures:a,context:A}),(l=s.getCanvas("mesh",S,w,!1)).context.drawImage(c,2,2),c=l.canvas;else{var k=(l=s.getCanvas("mesh",S,w,!1)).context,x=k.createImageData(m,y);if(o){var C=x.data;for(h=0,f=C.length;h<f;h+=4)C[h]=o[0],C[h+1]=o[1],C[h+2]=o[2],C[h+3]=255}for(h=0;h<a.length;h++)t(x,a[h],A);k.putImageData(x,2,2),c=l.canvas}return{canvas:c,offsetX:d-2*b,offsetY:p-2*_,scaleX:b,scaleY:_}}}();i.Mesh={fromIR:function(e){var t=e[2],r=e[3],i=e[4],s=e[5],u=e[6],c=e[7],l=e[8];return{type:"Pattern",getPattern:function(e,h,f){var d;if(a(e,c),f)d=n.Util.singularValueDecompose2dScale(e.mozCurrentTransform);else if(d=n.Util.singularValueDecompose2dScale(h.baseTransform),u){var p=n.Util.singularValueDecompose2dScale(u);d=[d[0]*p[0],d[1]*p[1]]}var v=o(s,d,t,r,i,f?null:l,h.cachedCanvases,h.webGLContext);return f||(e.setTransform.apply(e,h.baseTransform),u&&e.transform.apply(e,u)),e.translate(v.offsetX,v.offsetY),e.scale(v.scaleX,v.scaleY),e.createPattern(v.canvas,"no-repeat")}}}},i.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}};var s=function(){var e=1,t=2;function r(e,t,r,n,i){this.operatorList=e[2],this.matrix=e[3]||[1,0,0,1,0,0],this.bbox=e[4],this.xstep=e[5],this.ystep=e[6],this.paintType=e[7],this.tilingType=e[8],this.color=t,this.canvasGraphicsFactory=n,this.baseTransform=i,this.type="Pattern",this.ctx=r}return r.prototype={createPatternCanvas:function(e){var t=this.operatorList,r=this.bbox,i=this.xstep,a=this.ystep,o=this.paintType,s=this.tilingType,u=this.color,c=this.canvasGraphicsFactory;(0,n.info)("TilingType: "+s);var l=r[0],h=r[1],f=r[2],d=r[3],p=n.Util.singularValueDecompose2dScale(this.matrix),v=n.Util.singularValueDecompose2dScale(this.baseTransform),g=[p[0]*v[0],p[1]*v[1]],m=this.getSizeAndScale(i,this.ctx.canvas.width,g[0]),y=this.getSizeAndScale(a,this.ctx.canvas.height,g[1]),b=e.cachedCanvases.getCanvas("pattern",m.size,y.size,!0),_=b.context,A=c.createCanvasGraphics(_);return A.groupLevel=e.groupLevel,this.setFillAndStrokeStyleToContext(A,o,u),A.transform(m.scale,0,0,y.scale,0,0),A.transform(1,0,0,1,-l,-h),this.clipBbox(A,r,l,h,f,d),A.executeOperatorList(t),this.ctx.transform(1,0,0,1,l,h),this.ctx.scale(1/m.scale,1/y.scale),b.canvas},getSizeAndScale:function(e,t,r){e=Math.abs(e);var n=Math.max(3e3,t),i=Math.ceil(e*r);return i>=n?i=n:r=i/e,{scale:r,size:i}},clipBbox:function(e,t,r,n,i,a){if(Array.isArray(t)&&4===t.length){var o=i-r,s=a-n;e.ctx.rect(r,n,o,s),e.clip(),e.endPath()}},setFillAndStrokeStyleToContext:function(r,i,a){var o=r.ctx,s=r.current;switch(i){case e:var u=this.ctx;o.fillStyle=u.fillStyle,o.strokeStyle=u.strokeStyle,s.fillColor=u.fillStyle,s.strokeColor=u.strokeStyle;break;case t:var c=n.Util.makeCssRgb(a[0],a[1],a[2]);o.fillStyle=c,o.strokeStyle=c,s.fillColor=c,s.strokeColor=c;break;default:throw new n.FormatError("Unsupported paint type: ".concat(i))}},getPattern:function(e,t){(e=this.ctx).setTransform.apply(e,this.baseTransform),e.transform.apply(e,this.matrix);var r=this.createPatternCanvas(t);return e.createPattern(r,"repeat")}},r}();t.TilingPattern=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWorkerOptions=void 0;var n=Object.create(null);t.GlobalWorkerOptions=n,n.workerPort=void 0===n.workerPort?null:n.workerPort,n.workerSrc=void 0===n.workerSrc?"":n.workerSrc},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MessageHandler=p;var n=r(1);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=1,o=2,s=3,u=4,c=5,l=6,h=7,f=8;function d(e){if("object"!==i(e))return e;switch(e.name){case"AbortException":return new n.AbortException(e.message);case"MissingPDFException":return new n.MissingPDFException(e.message);case"UnexpectedResponseException":return new n.UnexpectedResponseException(e.message,e.status);case"UnknownErrorException":return new n.UnknownErrorException(e.message,e.details);default:return new n.UnknownErrorException(e.message,e.toString())}}function p(e,t,r){var n=this;this.sourceName=e,this.targetName=t,this.comObj=r,this.callbackId=1,this.streamId=1,this.postMessageTransfers=!0,this.streamSinks=Object.create(null),this.streamControllers=Object.create(null);var i=this.callbacksCapabilities=Object.create(null),a=this.actionHandler=Object.create(null);this._onComObjOnMessage=function(e){var t=e.data;if(t.targetName===n.sourceName)if(t.stream)n._processStreamMessage(t);else if(t.isReply){var o=t.callbackId;if(!(t.callbackId in i))throw new Error("Cannot resolve callback ".concat(o));var s=i[o];delete i[o],"reason"in t?s.reject(d(t.reason)):s.resolve(t.data)}else{if(!(t.action in a))throw new Error("Unknown action from worker: ".concat(t.action));var u=a[t.action];if(t.callbackId){var c=n.sourceName,l=t.sourceName;new Promise((function(e){e(u(t.data))})).then((function(e){r.postMessage({sourceName:c,targetName:l,isReply:!0,callbackId:t.callbackId,data:e})}),(function(e){r.postMessage({sourceName:c,targetName:l,isReply:!0,callbackId:t.callbackId,reason:d(e)})}))}else t.streamId?n._createStreamSink(t):u(t.data)}},r.addEventListener("message",this._onComObjOnMessage)}p.prototype={on:function(e,t){var r=this.actionHandler;if(r[e])throw new Error('There is already an actionName called "'.concat(e,'"'));r[e]=t},send:function(e,t,r){this.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,data:t},r)},sendWithPromise:function(e,t,r){var i=this.callbackId++,a=(0,n.createPromiseCapability)();this.callbacksCapabilities[i]=a;try{this.postMessage({sourceName:this.sourceName,targetName:this.targetName,action:e,callbackId:i,data:t},r)}catch(e){a.reject(e)}return a.promise},sendWithStream:function(e,t,r,i){var o=this,s=this.streamId++,u=this.sourceName,c=this.targetName,h=this.comObj;return new n.ReadableStream({start:function(r){var a=(0,n.createPromiseCapability)();return o.streamControllers[s]={controller:r,startCall:a,pullCall:null,cancelCall:null,isClosed:!1},o.postMessage({sourceName:u,targetName:c,action:e,streamId:s,data:t,desiredSize:r.desiredSize},i),a.promise},pull:function(e){var t=(0,n.createPromiseCapability)();return o.streamControllers[s].pullCall=t,h.postMessage({sourceName:u,targetName:c,stream:l,streamId:s,desiredSize:e.desiredSize}),t.promise},cancel:function(e){(0,n.assert)(e instanceof Error,"cancel must have a valid reason");var t=(0,n.createPromiseCapability)();return o.streamControllers[s].cancelCall=t,o.streamControllers[s].isClosed=!0,h.postMessage({sourceName:u,targetName:c,stream:a,streamId:s,reason:d(e)}),t.promise}},r)},_createStreamSink:function(e){var t=this,r=this.actionHandler[e.action],i=e.streamId,a=e.desiredSize,o=this.sourceName,l=e.sourceName,h=(0,n.createPromiseCapability)(),p=this.comObj,v={enqueue:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0;if(!this.isCancelled){var s=this.desiredSize;this.desiredSize-=r,s>0&&this.desiredSize<=0&&(this.sinkCapability=(0,n.createPromiseCapability)(),this.ready=this.sinkCapability.promise),t.postMessage({sourceName:o,targetName:l,stream:u,streamId:i,chunk:e},a)}},close:function(){this.isCancelled||(this.isCancelled=!0,p.postMessage({sourceName:o,targetName:l,stream:s,streamId:i}),delete t.streamSinks[i])},error:function(e){(0,n.assert)(e instanceof Error,"error must have a valid reason"),this.isCancelled||(this.isCancelled=!0,p.postMessage({sourceName:o,targetName:l,stream:c,streamId:i,reason:d(e)}))},sinkCapability:h,onPull:null,onCancel:null,isCancelled:!1,desiredSize:a,ready:null};v.sinkCapability.resolve(),v.ready=v.sinkCapability.promise,this.streamSinks[i]=v,new Promise((function(t){t(r(e.data,v))})).then((function(){p.postMessage({sourceName:o,targetName:l,stream:f,streamId:i,success:!0})}),(function(e){p.postMessage({sourceName:o,targetName:l,stream:f,streamId:i,reason:d(e)})}))},_processStreamMessage:function(e){var t=this,r=this.sourceName,i=e.sourceName,p=e.streamId,v=this.comObj,g=function(){Promise.all([t.streamControllers[p].startCall,t.streamControllers[p].pullCall,t.streamControllers[p].cancelCall].map((function(e){return e&&e.promise.catch((function(){}))}))).then((function(){delete t.streamControllers[p]}))};switch(e.stream){case f:e.success?this.streamControllers[p].startCall.resolve():this.streamControllers[p].startCall.reject(d(e.reason));break;case h:e.success?this.streamControllers[p].pullCall.resolve():this.streamControllers[p].pullCall.reject(d(e.reason));break;case l:if(!this.streamSinks[p]){v.postMessage({sourceName:r,targetName:i,stream:h,streamId:p,success:!0});break}this.streamSinks[p].desiredSize<=0&&e.desiredSize>0&&this.streamSinks[p].sinkCapability.resolve(),this.streamSinks[p].desiredSize=e.desiredSize;var m=this.streamSinks[e.streamId].onPull;new Promise((function(e){e(m&&m())})).then((function(){v.postMessage({sourceName:r,targetName:i,stream:h,streamId:p,success:!0})}),(function(e){v.postMessage({sourceName:r,targetName:i,stream:h,streamId:p,reason:d(e)})}));break;case u:if((0,n.assert)(this.streamControllers[p],"enqueue should have stream controller"),this.streamControllers[p].isClosed)break;this.streamControllers[p].controller.enqueue(e.chunk);break;case s:if((0,n.assert)(this.streamControllers[p],"close should have stream controller"),this.streamControllers[p].isClosed)break;this.streamControllers[p].isClosed=!0,this.streamControllers[p].controller.close(),g();break;case c:(0,n.assert)(this.streamControllers[p],"error should have stream controller"),this.streamControllers[p].controller.error(d(e.reason)),g();break;case o:e.success?this.streamControllers[p].cancelCall.resolve():this.streamControllers[p].cancelCall.reject(d(e.reason)),g();break;case a:if(!this.streamSinks[p])break;var y=this.streamSinks[e.streamId].onCancel;new Promise((function(t){t(y&&y(d(e.reason)))})).then((function(){v.postMessage({sourceName:r,targetName:i,stream:o,streamId:p,success:!0})}),(function(e){v.postMessage({sourceName:r,targetName:i,stream:o,streamId:p,reason:d(e)})})),this.streamSinks[p].sinkCapability.reject(d(e.reason)),this.streamSinks[p].isCancelled=!0,delete this.streamSinks[p];break;default:throw new Error("Unexpected stream case")}},postMessage:function(e,t){t&&this.postMessageTransfers?this.comObj.postMessage(e,t):this.comObj.postMessage(e)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Metadata=void 0;var n=r(1),i=r(191);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,n.assert)("string"==typeof t,"Metadata: input is not a string"),t=this._repair(t);var r=(new i.SimpleXMLParser).parseFromString(t);this._metadata=Object.create(null),r&&this._parse(r)}var t,r,o;return t=e,(r=[{key:"_repair",value:function(e){return e.replace(/^([^<]+)/,"").replace(/>\\376\\377([^<]+)/g,(function(e,t){for(var r=t.replace(/\\([0-3])([0-7])([0-7])/g,(function(e,t,r,n){return String.fromCharCode(64*t+8*r+1*n)})).replace(/&(amp|apos|gt|lt|quot);/g,(function(e,t){switch(t){case"amp":return"&";case"apos":return"'";case"gt":return">";case"lt":return"<";case"quot":return'"'}throw new Error("_repair: ".concat(t," isn't defined."))})),n="",i=0,a=r.length;i<a;i+=2){var o=256*r.charCodeAt(i)+r.charCodeAt(i+1);n+=o>=32&&o<127&&60!==o&&62!==o&&38!==o?String.fromCharCode(o):"&#x"+(65536+o).toString(16).substring(1)+";"}return">"+n}))}},{key:"_parse",value:function(e){var t=e.documentElement;if("rdf:rdf"!==t.nodeName.toLowerCase())for(t=t.firstChild;t&&"rdf:rdf"!==t.nodeName.toLowerCase();)t=t.nextSibling;var r=t?t.nodeName.toLowerCase():null;if(t&&"rdf:rdf"===r&&t.hasChildNodes())for(var n=t.childNodes,i=0,a=n.length;i<a;i++){var o=n[i];if("rdf:description"===o.nodeName.toLowerCase())for(var s=0,u=o.childNodes.length;s<u;s++)if("#text"!==o.childNodes[s].nodeName.toLowerCase()){var c=o.childNodes[s],l=c.nodeName.toLowerCase();this._metadata[l]=c.textContent.trim()}}}},{key:"get",value:function(e){var t=this._metadata[e];return void 0!==t?t:null}},{key:"getAll",value:function(){return this._metadata}},{key:"has",value:function(e){return void 0!==this._metadata[e]}}])&&a(t.prototype,r),o&&a(t,o),e}();t.Metadata=o},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t,r){return(o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleXMLParser=void 0;var f={NoError:0,EndOfDocument:-1,UnterminatedCdat:-2,UnterminatedXmlDeclaration:-3,UnterminatedDoctypeDeclaration:-4,UnterminatedComment:-5,MalformedElement:-6,OutOfMemory:-7,UnterminatedAttributeValue:-8,UnterminatedElement:-9,ElementNeverBegun:-10};function d(e,t){var r=e[t];return" "===r||"\n"===r||"\r"===r||"\t"===r}var p=function(){function e(){c(this,e)}return h(e,[{key:"_resolveEntities",value:function(e){var t=this;return e.replace(/&([^;]+);/g,(function(e,r){if("#x"===r.substring(0,2))return String.fromCharCode(parseInt(r.substring(2),16));if("#"===r.substring(0,1))return String.fromCharCode(parseInt(r.substring(1),10));switch(r){case"lt":return"<";case"gt":return">";case"amp":return"&";case"quot":return'"'}return t.onResolveEntity(r)}))}},{key:"_parseContent",value:function(e,t){var r,n=t,i=[];function a(){for(;n<e.length&&d(e,n);)++n}for(;n<e.length&&!d(e,n)&&">"!==e[n]&&"/"!==e[n];)++n;for(r=e.substring(t,n),a();n<e.length&&">"!==e[n]&&"/"!==e[n]&&"?"!==e[n];){a();for(var o,s="";n<e.length&&!d(e,n)&&"="!==e[n];)s+=e[n],++n;if(a(),"="!==e[n])return null;++n,a();var u=e[n];if('"'!==u&&"'"!==u)return null;var c=e.indexOf(u,++n);if(c<0)return null;o=e.substring(n,c),i.push({name:s,value:this._resolveEntities(o)}),n=c+1,a()}return{name:r,attributes:i,parsed:n-t}}},{key:"_parseProcessingInstruction",value:function(e,t){var r,n=t;for(;n<e.length&&!d(e,n)&&">"!==e[n]&&"/"!==e[n];)++n;r=e.substring(t,n),function(){for(;n<e.length&&d(e,n);)++n}();for(var i=n;n<e.length&&("?"!==e[n]||">"!==e[n+1]);)++n;return{name:r,value:e.substring(i,n),parsed:n-t}}},{key:"parseXml",value:function(e){for(var t=0;t<e.length;){var r=t;if("<"===e[t]){var n=void 0;switch(e[++r]){case"/":if(++r,(n=e.indexOf(">",r))<0)return void this.onError(f.UnterminatedElement);this.onEndElement(e.substring(r,n)),r=n+1;break;case"?":++r;var i=this._parseProcessingInstruction(e,r);if("?>"!==e.substring(r+i.parsed,r+i.parsed+2))return void this.onError(f.UnterminatedXmlDeclaration);this.onPi(i.name,i.value),r+=i.parsed+2;break;case"!":if("--"===e.substring(r+1,r+3)){if((n=e.indexOf("--\x3e",r+3))<0)return void this.onError(f.UnterminatedComment);this.onComment(e.substring(r+3,n)),r=n+3}else if("[CDATA["===e.substring(r+1,r+8)){if((n=e.indexOf("]]>",r+8))<0)return void this.onError(f.UnterminatedCdat);this.onCdata(e.substring(r+8,n)),r=n+3}else{if("DOCTYPE"!==e.substring(r+1,r+8))return void this.onError(f.MalformedElement);var a=e.indexOf("[",r+8),o=!1;if((n=e.indexOf(">",r+8))<0)return void this.onError(f.UnterminatedDoctypeDeclaration);if(a>0&&n>a){if((n=e.indexOf("]>",r+8))<0)return void this.onError(f.UnterminatedDoctypeDeclaration);o=!0}var s=e.substring(r+8,n+(o?1:0));this.onDoctype(s),r=n+(o?2:1)}break;default:var u=this._parseContent(e,r);if(null===u)return void this.onError(f.MalformedElement);var c=!1;if("/>"===e.substring(r+u.parsed,r+u.parsed+2))c=!0;else if(">"!==e.substring(r+u.parsed,r+u.parsed+1))return void this.onError(f.UnterminatedElement);this.onBeginElement(u.name,u.attributes,c),r+=u.parsed+(c?2:1)}}else{for(;r<e.length&&"<"!==e[r];)r++;var l=e.substring(t,r);this.onText(this._resolveEntities(l))}t=r}}},{key:"onResolveEntity",value:function(e){return"&".concat(e,";")}},{key:"onPi",value:function(e,t){}},{key:"onComment",value:function(e){}},{key:"onCdata",value:function(e){}},{key:"onDoctype",value:function(e){}},{key:"onText",value:function(e){}},{key:"onBeginElement",value:function(e,t,r){}},{key:"onEndElement",value:function(e){}},{key:"onError",value:function(e){}}]),e}(),v=function(){function e(t,r){c(this,e),this.nodeName=t,this.nodeValue=r,Object.defineProperty(this,"parentNode",{value:null,writable:!0})}return h(e,[{key:"hasChildNodes",value:function(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function(){var e=this.parentNode.childNodes;if(e){var t=e.indexOf(this);if(-1!==t)return e[t+1]}}},{key:"textContent",get:function(){return this.childNodes?this.childNodes.map((function(e){return e.textContent})).join(""):this.nodeValue||""}}]),e}(),g=function(e){function t(){var e;return c(this,t),(e=a(this,s(t).call(this)))._currentFragment=null,e._stack=null,e._errorCode=f.NoError,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),h(t,[{key:"parseFromString",value:function(e){if(this._currentFragment=[],this._stack=[],this._errorCode=f.NoError,this.parseXml(e),this._errorCode===f.NoError){var t=i(this._currentFragment,1)[0];if(t)return{documentElement:t}}}},{key:"onResolveEntity",value:function(e){switch(e){case"apos":return"'"}return o(s(t.prototype),"onResolveEntity",this).call(this,e)}},{key:"onText",value:function(e){if(!function(e){for(var t=0,r=e.length;t<r;t++)if(!d(e,t))return!1;return!0}(e)){var t=new v("#text",e);this._currentFragment.push(t)}}},{key:"onCdata",value:function(e){var t=new v("#text",e);this._currentFragment.push(t)}},{key:"onBeginElement",value:function(e,t,r){var n=new v(e);n.childNodes=[],this._currentFragment.push(n),r||(this._stack.push(this._currentFragment),this._currentFragment=n.childNodes)}},{key:"onEndElement",value:function(e){this._currentFragment=this._stack.pop()||[];var t=this._currentFragment[this._currentFragment.length-1];if(t)for(var r=0,n=t.childNodes.length;r<n;r++)t.childNodes[r].parentNode=t}},{key:"onError",value:function(e){this._errorCode=e}}]),t}(p);t.SimpleXMLParser=g},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFDataTransportStream=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1);function o(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var h=function(){function e(t,r){var n=this;u(this,e),(0,a.assert)(r),this._queuedChunks=[],this._progressiveDone=t.progressiveDone||!1;var i=t.initialData;if(i&&i.length>0){var o=new Uint8Array(i).buffer;this._queuedChunks.push(o)}this._pdfDataRangeTransport=r,this._isStreamingSupported=!t.disableStream,this._isRangeSupported=!t.disableRange,this._contentLength=t.length,this._fullRequestReader=null,this._rangeReaders=[],this._pdfDataRangeTransport.addRangeListener((function(e,t){n._onReceiveData({begin:e,chunk:t})})),this._pdfDataRangeTransport.addProgressListener((function(e,t){n._onProgress({loaded:e,total:t})})),this._pdfDataRangeTransport.addProgressiveReadListener((function(e){n._onReceiveData({chunk:e})})),this._pdfDataRangeTransport.addProgressiveDoneListener((function(){n._onProgressiveDone()})),this._pdfDataRangeTransport.transportReady()}return l(e,[{key:"_onReceiveData",value:function(e){var t=new Uint8Array(e.chunk).buffer;if(void 0===e.begin)this._fullRequestReader?this._fullRequestReader._enqueue(t):this._queuedChunks.push(t);else{var r=this._rangeReaders.some((function(r){return r._begin===e.begin&&(r._enqueue(t),!0)}));(0,a.assert)(r)}}},{key:"_onProgress",value:function(e){if(void 0===e.total){var t=this._rangeReaders[0];t&&t.onProgress&&t.onProgress({loaded:e.loaded})}else{var r=this._fullRequestReader;r&&r.onProgress&&r.onProgress({loaded:e.loaded,total:e.total})}}},{key:"_onProgressiveDone",value:function(){this._fullRequestReader&&this._fullRequestReader.progressiveDone(),this._progressiveDone=!0}},{key:"_removeRangeReader",value:function(e){var t=this._rangeReaders.indexOf(e);t>=0&&this._rangeReaders.splice(t,1)}},{key:"getFullReader",value:function(){(0,a.assert)(!this._fullRequestReader);var e=this._queuedChunks;return this._queuedChunks=null,new f(this,e,this._progressiveDone)}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null;var r=new d(this,e,t);return this._pdfDataRangeTransport.requestDataRange(e,t),this._rangeReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeReaders.slice(0).forEach((function(t){t.cancel(e)})),this._pdfDataRangeTransport.abort()}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}();t.PDFDataTransportStream=h;var f=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];u(this,e),this._stream=t,this._done=n||!1,this._filename=null,this._queuedChunks=r||[],this._loaded=0;var i=!0,a=!1,o=void 0;try{for(var s,c=this._queuedChunks[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=s.value;this._loaded+=l.byteLength}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}this._requests=[],this._headersReady=Promise.resolve(),t._fullRequestReader=this,this.onProgress=null}var t;return l(e,[{key:"_enqueue",value:function(e){if(!this._done){if(this._requests.length>0)this._requests.shift().resolve({value:e,done:!1});else this._queuedChunks.push(e);this._loaded+=e.byteLength}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this._queuedChunks.length>0)){e.next=3;break}return t=this._queuedChunks.shift(),e.abrupt("return",{value:t,done:!1});case 3:if(!this._done){e.next=5;break}return e.abrupt("return",{value:void 0,done:!0});case 5:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise);case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[]}},{key:"progressiveDone",value:function(){this._done||(this._done=!0)}},{key:"headersReady",get:function(){return this._headersReady}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function(){return this._stream._contentLength}}]),e}(),d=function(){function e(t,r,n){u(this,e),this._stream=t,this._begin=r,this._end=n,this._queuedChunk=null,this._requests=[],this._done=!1,this.onProgress=null}var t;return l(e,[{key:"_enqueue",value:function(e){if(!this._done){if(0===this._requests.length)this._queuedChunk=e;else this._requests.shift().resolve({value:e,done:!1}),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[];this._done=!0,this._stream._removeRangeReader(this)}}},{key:"read",value:(t=s(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._queuedChunk){e.next=4;break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1});case 4:if(!this._done){e.next=6;break}return e.abrupt("return",{value:void 0,done:!0});case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise);case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._stream._removeRangeReader(this)}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLContext=void 0;var n=r(1);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(t){var r=t.enable,n=void 0!==r&&r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._enabled=!0===n}var t,r,a;return t=e,(r=[{key:"composeSMask",value:function(e){var t=e.layer,r=e.mask,n=e.properties;return o.composeSMask(t,r,n)}},{key:"drawFigures",value:function(e){var t=e.width,r=e.height,n=e.backgroundColor,i=e.figures,a=e.context;return o.drawFigures(t,r,n,i,a)}},{key:"clear",value:function(){o.cleanup()}},{key:"isEnabled",get:function(){var e=this._enabled;return e&&(e=o.tryInitGL()),(0,n.shadow)(this,"isEnabled",e)}}])&&i(t.prototype,r),a&&i(t,a),e}();t.WebGLContext=a;var o=function(){function e(e,t,r){var n=e.createShader(r);if(e.shaderSource(n,t),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var i=e.getShaderInfoLog(n);throw new Error("Error during shader compilation: "+i)}return n}function t(t,r){return e(t,r,t.VERTEX_SHADER)}function r(t,r){return e(t,r,t.FRAGMENT_SHADER)}function n(e,t){for(var r=e.createProgram(),n=0,i=t.length;n<i;++n)e.attachShader(r,t[n]);if(e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){var a=e.getProgramInfoLog(r);throw new Error("Error during program linking: "+a)}return r}function i(e,t,r){e.activeTexture(r);var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n}var a,o;function s(){a||(o=document.createElement("canvas"),a=o.getContext("webgl",{premultipliedalpha:!1}))}var u="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",c="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",l=null;var h="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",f="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",d=null;return{tryInitGL:function(){try{return s(),!!a}catch(e){}return!1},composeSMask:function(e,h,f){var d=e.width,p=e.height;l||function(){var e,i;s(),e=o,o=null,i=a,a=null;var h=n(i,[t(i,u),r(i,c)]);i.useProgram(h);var f={};f.gl=i,f.canvas=e,f.resolutionLocation=i.getUniformLocation(h,"u_resolution"),f.positionLocation=i.getAttribLocation(h,"a_position"),f.backdropLocation=i.getUniformLocation(h,"u_backdrop"),f.subtypeLocation=i.getUniformLocation(h,"u_subtype");var d=i.getAttribLocation(h,"a_texCoord"),p=i.getUniformLocation(h,"u_image"),v=i.getUniformLocation(h,"u_mask"),g=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,g),i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(d),i.vertexAttribPointer(d,2,i.FLOAT,!1,0,0),i.uniform1i(p,0),i.uniform1i(v,1),l=f}();var v=l,g=v.canvas,m=v.gl;g.width=d,g.height=p,m.viewport(0,0,m.drawingBufferWidth,m.drawingBufferHeight),m.uniform2f(v.resolutionLocation,d,p),f.backdrop?m.uniform4f(v.resolutionLocation,f.backdrop[0],f.backdrop[1],f.backdrop[2],1):m.uniform4f(v.resolutionLocation,0,0,0,0),m.uniform1i(v.subtypeLocation,"Luminosity"===f.subtype?1:0);var y=i(m,e,m.TEXTURE0),b=i(m,h,m.TEXTURE1),_=m.createBuffer();return m.bindBuffer(m.ARRAY_BUFFER,_),m.bufferData(m.ARRAY_BUFFER,new Float32Array([0,0,d,0,0,p,0,p,d,0,d,p]),m.STATIC_DRAW),m.enableVertexAttribArray(v.positionLocation),m.vertexAttribPointer(v.positionLocation,2,m.FLOAT,!1,0,0),m.clearColor(0,0,0,0),m.enable(m.BLEND),m.blendFunc(m.ONE,m.ONE_MINUS_SRC_ALPHA),m.clear(m.COLOR_BUFFER_BIT),m.drawArrays(m.TRIANGLES,0,6),m.flush(),m.deleteTexture(y),m.deleteTexture(b),m.deleteBuffer(_),g},drawFigures:function(e,i,u,c,l){d||function(){var e,i;s(),e=o,o=null,i=a,a=null;var u=n(i,[t(i,h),r(i,f)]);i.useProgram(u);var c={};c.gl=i,c.canvas=e,c.resolutionLocation=i.getUniformLocation(u,"u_resolution"),c.scaleLocation=i.getUniformLocation(u,"u_scale"),c.offsetLocation=i.getUniformLocation(u,"u_offset"),c.positionLocation=i.getAttribLocation(u,"a_position"),c.colorLocation=i.getAttribLocation(u,"a_color"),d=c}();var p=d,v=p.canvas,g=p.gl;v.width=e,v.height=i,g.viewport(0,0,g.drawingBufferWidth,g.drawingBufferHeight),g.uniform2f(p.resolutionLocation,e,i);var m,y,b,_=0;for(m=0,y=c.length;m<y;m++)switch(c[m].type){case"lattice":_+=((b=c[m].coords.length/c[m].verticesPerRow|0)-1)*(c[m].verticesPerRow-1)*6;break;case"triangles":_+=c[m].coords.length}var A=new Float32Array(2*_),S=new Uint8Array(3*_),w=l.coords,k=l.colors,x=0,C=0;for(m=0,y=c.length;m<y;m++){var P=c[m],R=P.coords,T=P.colors;switch(P.type){case"lattice":var E=P.verticesPerRow;b=R.length/E|0;for(var O=1;O<b;O++)for(var L=O*E+1,F=1;F<E;F++,L++)A[x]=w[R[L-E-1]],A[x+1]=w[R[L-E-1]+1],A[x+2]=w[R[L-E]],A[x+3]=w[R[L-E]+1],A[x+4]=w[R[L-1]],A[x+5]=w[R[L-1]+1],S[C]=k[T[L-E-1]],S[C+1]=k[T[L-E-1]+1],S[C+2]=k[T[L-E-1]+2],S[C+3]=k[T[L-E]],S[C+4]=k[T[L-E]+1],S[C+5]=k[T[L-E]+2],S[C+6]=k[T[L-1]],S[C+7]=k[T[L-1]+1],S[C+8]=k[T[L-1]+2],A[x+6]=A[x+2],A[x+7]=A[x+3],A[x+8]=A[x+4],A[x+9]=A[x+5],A[x+10]=w[R[L]],A[x+11]=w[R[L]+1],S[C+9]=S[C+3],S[C+10]=S[C+4],S[C+11]=S[C+5],S[C+12]=S[C+6],S[C+13]=S[C+7],S[C+14]=S[C+8],S[C+15]=k[T[L]],S[C+16]=k[T[L]+1],S[C+17]=k[T[L]+2],x+=12,C+=18;break;case"triangles":for(var I=0,j=R.length;I<j;I++)A[x]=w[R[I]],A[x+1]=w[R[I]+1],S[C]=k[T[I]],S[C+1]=k[T[I]+1],S[C+2]=k[T[I]+2],x+=2,C+=3}}u?g.clearColor(u[0]/255,u[1]/255,u[2]/255,1):g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT);var M=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,M),g.bufferData(g.ARRAY_BUFFER,A,g.STATIC_DRAW),g.enableVertexAttribArray(p.positionLocation),g.vertexAttribPointer(p.positionLocation,2,g.FLOAT,!1,0,0);var N=g.createBuffer();return g.bindBuffer(g.ARRAY_BUFFER,N),g.bufferData(g.ARRAY_BUFFER,S,g.STATIC_DRAW),g.enableVertexAttribArray(p.colorLocation),g.vertexAttribPointer(p.colorLocation,3,g.UNSIGNED_BYTE,!1,0,0),g.uniform2f(p.scaleLocation,l.scaleX,l.scaleY),g.uniform2f(p.offsetLocation,l.offsetX,l.offsetY),g.drawArrays(g.TRIANGLES,0,_),g.flush(),g.deleteBuffer(M),g.deleteBuffer(N),v},cleanup:function(){l&&l.canvas&&(l.canvas.width=0,l.canvas.height=0),d&&d.canvas&&(d.canvas.width=0,d.canvas.height=0),l=null,d=null}}}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTextLayer=void 0;var n,i=r(1),a=(n=r(3))&&n.__esModule?n:{default:n};var o=function(){var e=1e5,t=/\S/;function r(e,r,n){var a,o=document.createElement("span"),s={angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1};if(e._textDivs.push(o),a=r.str,!t.test(a))return s.isWhitespace=!0,void e._textDivProperties.set(o,s);var u=i.Util.transform(e._viewport.transform,r.transform),c=Math.atan2(u[1],u[0]),l=n[r.fontName];l.vertical&&(c+=Math.PI/2);var h,f,d=Math.sqrt(u[2]*u[2]+u[3]*u[3]),p=d;if(l.ascent?p=l.ascent*p:l.descent&&(p=(1+l.descent)*p),0===c?(h=u[4],f=u[5]-p):(h=u[4]+p*Math.sin(c),f=u[5]-p*Math.cos(c)),o.style.left="".concat(h,"px"),o.style.top="".concat(f,"px"),o.style.fontSize="".concat(d,"px"),o.style.fontFamily=l.fontFamily,o.textContent=r.str,e._fontInspectorEnabled&&(o.dataset.fontName=r.fontName),0!==c&&(s.angle=c*(180/Math.PI)),r.str.length>1&&(l.vertical?s.canvasWidth=r.height*e._viewport.scale:s.canvasWidth=r.width*e._viewport.scale),e._textDivProperties.set(o,s),e._textContentStream&&e._layoutText(o),e._enhanceTextSelection){var v=1,g=0;0!==c&&(v=Math.cos(c),g=Math.sin(c));var m,y,b=(l.vertical?r.height:r.width)*e._viewport.scale,_=d;0!==c?(m=[v,g,-g,v,h,f],y=i.Util.getAxialAlignedBoundingBox([0,0,b,_],m)):y=[h,f,h+b,f+_],e._bounds.push({left:y[0],top:y[1],right:y[2],bottom:y[3],div:o,size:[b,_],m:m})}}function n(t){if(!t._canceled){var r=t._textDivs,n=t._capability,i=r.length;if(i>e)return t._renderingDone=!0,void n.resolve();if(!t._textContentStream)for(var a=0;a<i;a++)t._layoutText(r[a]);t._renderingDone=!0,n.resolve()}}function o(e){for(var t=e._bounds,r=e._viewport,n=function(e,t,r){var n=r.map((function(e,t){return{x1:e.left,y1:e.top,x2:e.right,y2:e.bottom,index:t,x1New:void 0,x2New:void 0}}));s(e,n);var i=new Array(r.length);return n.forEach((function(e){var t=e.index;i[t]={left:e.x1New,top:0,right:e.x2New,bottom:0}})),r.map((function(t,r){var a=i[r],o=n[r];o.x1=t.top,o.y1=e-a.right,o.x2=t.bottom,o.y2=e-a.left,o.index=r,o.x1New=void 0,o.x2New=void 0})),s(t,n),n.forEach((function(e){var t=e.index;i[t].top=e.x1New,i[t].bottom=e.x2New})),i}(r.width,r.height,t),a=0;a<n.length;a++){var o=t[a].div,u=e._textDivProperties.get(o);if(0!==u.angle){var c=n[a],l=t[a],h=l.m,f=h[0],d=h[1],p=[[0,0],[0,l.size[1]],[l.size[0],0],l.size],v=new Float64Array(64);p.forEach((function(e,t){var r=i.Util.applyTransform(e,h);v[t+0]=f&&(c.left-r[0])/f,v[t+4]=d&&(c.top-r[1])/d,v[t+8]=f&&(c.right-r[0])/f,v[t+12]=d&&(c.bottom-r[1])/d,v[t+16]=d&&(c.left-r[0])/-d,v[t+20]=f&&(c.top-r[1])/f,v[t+24]=d&&(c.right-r[0])/-d,v[t+28]=f&&(c.bottom-r[1])/f,v[t+32]=f&&(c.left-r[0])/-f,v[t+36]=d&&(c.top-r[1])/-d,v[t+40]=f&&(c.right-r[0])/-f,v[t+44]=d&&(c.bottom-r[1])/-d,v[t+48]=d&&(c.left-r[0])/d,v[t+52]=f&&(c.top-r[1])/-f,v[t+56]=d&&(c.right-r[0])/d,v[t+60]=f&&(c.bottom-r[1])/-f}));var g=function(e,t,r){for(var n=0,i=0;i<r;i++){var a=e[t++];a>0&&(n=n?Math.min(a,n):a)}return n},m=1+Math.min(Math.abs(f),Math.abs(d));u.paddingLeft=g(v,32,16)/m,u.paddingTop=g(v,48,16)/m,u.paddingRight=g(v,0,16)/m,u.paddingBottom=g(v,16,16)/m,e._textDivProperties.set(o,u)}else u.paddingLeft=t[a].left-n[a].left,u.paddingTop=t[a].top-n[a].top,u.paddingRight=n[a].right-t[a].right,u.paddingBottom=n[a].bottom-t[a].bottom,e._textDivProperties.set(o,u)}}function s(e,t){t.sort((function(e,t){return e.x1-t.x1||e.index-t.index}));var r=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}];t.forEach((function(e){for(var t=0;t<r.length&&r[t].end<=e.y1;)t++;for(var n,i,a=r.length-1;a>=0&&r[a].start>=e.y2;)a--;var o,s,u=-1/0;for(o=t;o<=a;o++){var c;(c=(i=(n=r[o]).boundary).x2>e.x1?i.index>e.index?i.x1New:e.x1:void 0===i.x2New?(i.x2+e.x1)/2:i.x2New)>u&&(u=c)}for(e.x1New=u,o=t;o<=a;o++)void 0===(i=(n=r[o]).boundary).x2New?i.x2>e.x1?i.index>e.index&&(i.x2New=i.x2):i.x2New=u:i.x2New>u&&(i.x2New=Math.max(u,i.x2));var l=[],h=null;for(o=t;o<=a;o++){var f=(i=(n=r[o]).boundary).x2>e.x2?i:e;h===f?l[l.length-1].end=n.end:(l.push({start:n.start,end:n.end,boundary:f}),h=f)}for(r[t].start<e.y1&&(l[0].start=e.y1,l.unshift({start:r[t].start,end:e.y1,boundary:r[t].boundary})),e.y2<r[a].end&&(l[l.length-1].end=e.y2,l.push({start:e.y2,end:r[a].end,boundary:r[a].boundary})),o=t;o<=a;o++)if(void 0===(i=(n=r[o]).boundary).x2New){var d=!1;for(s=t-1;!d&&s>=0&&r[s].start>=i.y1;s--)d=r[s].boundary===i;for(s=a+1;!d&&s<r.length&&r[s].end<=i.y2;s++)d=r[s].boundary===i;for(s=0;!d&&s<l.length;s++)d=l[s].boundary===i;d||(i.x2New=u)}Array.prototype.splice.apply(r,[t,a-t+1].concat(l))})),r.forEach((function(t){var r=t.boundary;void 0===r.x2New&&(r.x2New=Math.max(e,r.x2))}))}function u(e){var t=this,r=e.textContent,n=e.textContentStream,o=e.container,s=e.viewport,u=e.textDivs,c=e.textContentItemsStr,l=e.enhanceTextSelection;this._textContent=r,this._textContentStream=n,this._container=o,this._viewport=s,this._textDivs=u||[],this._textContentItemsStr=c||[],this._enhanceTextSelection=!!l,this._fontInspectorEnabled=!(!a.default.FontInspector||!a.default.FontInspector.enabled),this._reader=null,this._layoutTextLastFontSize=null,this._layoutTextLastFontFamily=null,this._layoutTextCtx=null,this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=(0,i.createPromiseCapability)(),this._renderTimer=null,this._bounds=[],this._capability.promise.finally((function(){t._layoutTextCtx&&(t._layoutTextCtx.canvas.width=0,t._layoutTextCtx.canvas.height=0,t._layoutTextCtx=null)})).catch((function(){}))}return u.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,this._reader&&(this._reader.cancel(new i.AbortException("TextLayer task cancelled.")),this._reader=null),null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject(new Error("TextLayer task cancelled."))},_processItems:function(e,t){for(var n=0,i=e.length;n<i;n++)this._textContentItemsStr.push(e[n].str),r(this,e[n],t)},_layoutText:function(e){var t=this._textDivProperties.get(e);if(!t.isWhitespace){var r="";if(0!==t.canvasWidth){var n=e.style,i=n.fontSize,a=n.fontFamily;i===this._layoutTextLastFontSize&&a===this._layoutTextLastFontFamily||(this._layoutTextCtx.font="".concat(i," ").concat(a),this._layoutTextLastFontSize=i,this._layoutTextLastFontFamily=a);var o=this._layoutTextCtx.measureText(e.textContent).width;o>0&&(t.scale=t.canvasWidth/o,r="scaleX(".concat(t.scale,")"))}0!==t.angle&&(r="rotate(".concat(t.angle,"deg) ").concat(r)),r.length>0&&(this._enhanceTextSelection&&(t.originalTransform=r),e.style.transform=r),this._textDivProperties.set(e,t),this._container.appendChild(e)}},_render:function(e){var t=this,r=(0,i.createPromiseCapability)(),a=Object.create(null),o=document.createElement("canvas");if(o.mozOpaque=!0,this._layoutTextCtx=o.getContext("2d",{alpha:!1}),this._textContent){var s=this._textContent.items,u=this._textContent.styles;this._processItems(s,u),r.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');this._reader=this._textContentStream.getReader(),function e(){t._reader.read().then((function(n){var i=n.value;n.done?r.resolve():(Object.assign(a,i.styles),t._processItems(i.items,a),e())}),r.reject)}()}r.promise.then((function(){a=null,e?t._renderTimer=setTimeout((function(){n(t),t._renderTimer=null}),e):n(t)}),this._capability.reject)},expandTextDivs:function(e){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(o(this),this._bounds=null);for(var t=[],r=[],n=0,i=this._textDivs.length;n<i;n++){var a=this._textDivs[n],s=this._textDivProperties.get(a);if(!s.isWhitespace)if(e){t.length=0,r.length=0,s.originalTransform&&t.push(s.originalTransform),s.paddingTop>0?(r.push("".concat(s.paddingTop,"px")),t.push("translateY(".concat(-s.paddingTop,"px)"))):r.push(0),s.paddingRight>0?r.push("".concat(s.paddingRight/s.scale,"px")):r.push(0),s.paddingBottom>0?r.push("".concat(s.paddingBottom,"px")):r.push(0),s.paddingLeft>0?(r.push("".concat(s.paddingLeft/s.scale,"px")),t.push("translateX(".concat(-s.paddingLeft/s.scale,"px)"))):r.push(0);var u=r.join(" ");"0 0 0 0"!==u&&(a.style.padding=u),t.length&&(a.style.transform=t.join(" "))}else a.style.padding=null,a.style.transform=s.originalTransform}}}},function(e){var t=new u({textContent:e.textContent,textContentStream:e.textContentStream,container:e.container,viewport:e.viewport,textDivs:e.textDivs,textContentItemsStr:e.textContentItemsStr,enhanceTextSelection:e.enhanceTextSelection});return t._render(e.timeout),t}}();t.renderTextLayer=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnnotationLayer=void 0;var n=r(183),i=r(1);function a(e,t,r){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v=function(){function e(){f(this,e)}return p(e,null,[{key:"create",value:function(e){switch(e.data.annotationType){case i.AnnotationType.LINK:return new m(e);case i.AnnotationType.TEXT:return new y(e);case i.AnnotationType.WIDGET:switch(e.data.fieldType){case"Tx":return new _(e);case"Btn":return e.data.radioButton?new S(e):e.data.checkBox?new A(e):new w(e);case"Ch":return new k(e)}return new b(e);case i.AnnotationType.POPUP:return new x(e);case i.AnnotationType.FREETEXT:return new P(e);case i.AnnotationType.LINE:return new R(e);case i.AnnotationType.SQUARE:return new T(e);case i.AnnotationType.CIRCLE:return new E(e);case i.AnnotationType.POLYLINE:return new O(e);case i.AnnotationType.CARET:return new F(e);case i.AnnotationType.INK:return new I(e);case i.AnnotationType.POLYGON:return new L(e);case i.AnnotationType.HIGHLIGHT:return new j(e);case i.AnnotationType.UNDERLINE:return new M(e);case i.AnnotationType.SQUIGGLY:return new N(e);case i.AnnotationType.STRIKEOUT:return new D(e);case i.AnnotationType.STAMP:return new q(e);case i.AnnotationType.FILEATTACHMENT:return new U(e);default:return new g(e)}}}]),e}(),g=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];f(this,e),this.isRenderable=r,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,this.svgFactory=t.svgFactory,r&&(this.container=this._createContainer(n))}return p(e,[{key:"_createContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.data,r=this.page,n=this.viewport,a=document.createElement("section"),o=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1];a.setAttribute("data-annotation-id",t.id);var u=i.Util.normalizeRect([t.rect[0],r.view[3]-t.rect[1]+r.view[1],t.rect[2],r.view[3]-t.rect[3]+r.view[1]]);if(a.style.transform="matrix(".concat(n.transform.join(","),")"),a.style.transformOrigin="-".concat(u[0],"px -").concat(u[1],"px"),!e&&t.borderStyle.width>0){a.style.borderWidth="".concat(t.borderStyle.width,"px"),t.borderStyle.style!==i.AnnotationBorderStyleType.UNDERLINE&&(o-=2*t.borderStyle.width,s-=2*t.borderStyle.width);var c=t.borderStyle.horizontalCornerRadius,l=t.borderStyle.verticalCornerRadius;if(c>0||l>0){var h="".concat(c,"px / ").concat(l,"px");a.style.borderRadius=h}switch(t.borderStyle.style){case i.AnnotationBorderStyleType.SOLID:a.style.borderStyle="solid";break;case i.AnnotationBorderStyleType.DASHED:a.style.borderStyle="dashed";break;case i.AnnotationBorderStyleType.BEVELED:(0,i.warn)("Unimplemented border style: beveled");break;case i.AnnotationBorderStyleType.INSET:(0,i.warn)("Unimplemented border style: inset");break;case i.AnnotationBorderStyleType.UNDERLINE:a.style.borderBottomStyle="solid"}t.color?a.style.borderColor=i.Util.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):a.style.borderWidth=0}return a.style.left="".concat(u[0],"px"),a.style.top="".concat(u[1],"px"),a.style.width="".concat(o,"px"),a.style.height="".concat(s,"px"),a}},{key:"_createPopup",value:function(e,t,r){t||((t=document.createElement("div")).style.height=e.style.height,t.style.width=e.style.width,e.appendChild(t));var n=new C({container:e,trigger:t,color:r.color,title:r.title,modificationDate:r.modificationDate,contents:r.contents,hideWrapper:!0}).render();n.style.left=e.style.width,e.appendChild(n)}},{key:"render",value:function(){(0,i.unreachable)("Abstract method `AnnotationElement.render` called")}}]),e}(),m=function(e){function t(e){f(this,t);var r=!!(e.data.url||e.data.dest||e.data.action);return s(this,c(t).call(this,e,r))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="linkAnnotation";var e=this.data,t=this.linkService,r=document.createElement("a");return e.url?(0,n.addLinkAttributes)(r,{url:e.url,target:e.newWindow?n.LinkTarget.BLANK:t.externalLinkTarget,rel:t.externalLinkRel,enabled:t.externalLinkEnabled}):e.action?this._bindNamedAction(r,e.action):this._bindLink(r,e.dest),this.container.appendChild(r),this.container}},{key:"_bindLink",value:function(e,t){var r=this;e.href=this.linkService.getDestinationHash(t),e.onclick=function(){return t&&r.linkService.navigateTo(t),!1},t&&(e.className="internalLink")}},{key:"_bindNamedAction",value:function(e,t){var r=this;e.href=this.linkService.getAnchorUrl(""),e.onclick=function(){return r.linkService.executeNamedAction(t),!1},e.className="internalLink"}}]),t}(g),y=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="textAnnotation";var e=document.createElement("img");return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",e.alt="[{{type}} Annotation]",e.dataset.l10nId="text_annotation_type",e.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}}]),t}(g),b=function(e){function t(){return f(this,t),s(this,c(t).apply(this,arguments))}return l(t,e),p(t,[{key:"render",value:function(){return this.container}}]),t}(g),_=function(e){function t(e){f(this,t);var r=e.renderInteractiveForms||!e.data.hasAppearance&&!!e.data.fieldValue;return s(this,c(t).call(this,e,r))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="textWidgetAnnotation";var e=null;if(this.renderInteractiveForms){if(this.data.multiLine?(e=document.createElement("textarea")).textContent=this.data.fieldValue:((e=document.createElement("input")).type="text",e.setAttribute("value",this.data.fieldValue)),e.disabled=this.data.readOnly,null!==this.data.maxLen&&(e.maxLength=this.data.maxLen),this.data.comb){var t=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen;e.classList.add("comb"),e.style.letterSpacing="calc(".concat(t,"px - 1ch)")}}else{(e=document.createElement("div")).textContent=this.data.fieldValue,e.style.verticalAlign="middle",e.style.display="table-cell";var r=null;this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)&&(r=this.page.commonObjs.get(this.data.fontRefName)),this._setTextStyle(e,r)}return null!==this.data.textAlignment&&(e.style.textAlign=["left","center","right"][this.data.textAlignment]),this.container.appendChild(e),this.container}},{key:"_setTextStyle",value:function(e,t){var r=e.style;if(r.fontSize="".concat(this.data.fontSize,"px"),r.direction=this.data.fontDirection<0?"rtl":"ltr",t){r.fontWeight=t.black?t.bold?"900":"bold":t.bold?"bold":"normal",r.fontStyle=t.italic?"italic":"normal";var n=t.loadedName?'"'.concat(t.loadedName,'", '):"",i=t.fallbackName||"Helvetica, sans-serif";r.fontFamily=n+i}}}]),t}(b),A=function(e){function t(e){return f(this,t),s(this,c(t).call(this,e,e.renderInteractiveForms))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation checkBox";var e=document.createElement("input");return e.disabled=this.data.readOnly,e.type="checkbox",this.data.fieldValue&&"Off"!==this.data.fieldValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(b),S=function(e){function t(e){return f(this,t),s(this,c(t).call(this,e,e.renderInteractiveForms))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="buttonWidgetAnnotation radioButton";var e=document.createElement("input");return e.disabled=this.data.readOnly,e.type="radio",e.name=this.data.fieldName,this.data.fieldValue===this.data.buttonValue&&e.setAttribute("checked",!0),this.container.appendChild(e),this.container}}]),t}(b),w=function(e){function t(){return f(this,t),s(this,c(t).apply(this,arguments))}return l(t,e),p(t,[{key:"render",value:function(){var e=a(c(t.prototype),"render",this).call(this);return e.className="buttonWidgetAnnotation pushButton",e}}]),t}(m),k=function(e){function t(e){return f(this,t),s(this,c(t).call(this,e,e.renderInteractiveForms))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="choiceWidgetAnnotation";var e=document.createElement("select");e.disabled=this.data.readOnly,this.data.combo||(e.size=this.data.options.length,this.data.multiSelect&&(e.multiple=!0));var t=!0,r=!1,n=void 0;try{for(var i,a=this.data.options[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=document.createElement("option");s.textContent=o.displayValue,s.value=o.exportValue,this.data.fieldValue.includes(o.displayValue)&&s.setAttribute("selected",!0),e.appendChild(s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}return this.container.appendChild(e),this.container}}]),t}(b),x=function(e){function t(e){f(this,t);var r=!(!e.data.title&&!e.data.contents);return s(this,c(t).call(this,e,r))}return l(t,e),p(t,[{key:"render",value:function(){if(this.container.className="popupAnnotation",["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container;var e='[data-annotation-id="'.concat(this.data.parentId,'"]'),t=this.layer.querySelector(e);if(!t)return this.container;var r=new C({container:this.container,trigger:t,color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents}),n=parseFloat(t.style.left),i=parseFloat(t.style.width);return this.container.style.transformOrigin="-".concat(n+i,"px -").concat(t.style.top),this.container.style.left="".concat(n+i,"px"),this.container.appendChild(r.render()),this.container}}]),t}(g),C=function(){function e(t){f(this,e),this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.modificationDate=t.modificationDate,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return p(e,[{key:"render",value:function(){var e=document.createElement("div");e.className="popupWrapper",this.hideElement=this.hideWrapper?e:this.container,this.hideElement.setAttribute("hidden",!0);var t=document.createElement("div");t.className="popup";var r=this.color;if(r){var a=.7*(255-r[0])+r[0],o=.7*(255-r[1])+r[1],s=.7*(255-r[2])+r[2];t.style.backgroundColor=i.Util.makeCssRgb(0|a,0|o,0|s)}var u=document.createElement("h1");u.textContent=this.title,t.appendChild(u);var c=n.PDFDateString.toDateObject(this.modificationDate);if(c){var l=document.createElement("span");l.textContent="{{date}}, {{time}}",l.dataset.l10nId="annotation_date_string",l.dataset.l10nArgs=JSON.stringify({date:c.toLocaleDateString(),time:c.toLocaleTimeString()}),t.appendChild(l)}var h=this._formatContents(this.contents);return t.appendChild(h),this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),t.addEventListener("click",this._hide.bind(this,!0)),e.appendChild(t),e}},{key:"_formatContents",value:function(e){for(var t=document.createElement("p"),r=e.split(/(?:\r\n?|\n)/),n=0,i=r.length;n<i;++n){var a=r[n];t.appendChild(document.createTextNode(a)),n<i-1&&t.appendChild(document.createElement("br"))}return t}},{key:"_toggle",value:function(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)}},{key:"_hide",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}}]),e}(),P=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="freeTextAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),R=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="lineAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=this.svgFactory.createElement("svg:line");return i.setAttribute("x1",e.rect[2]-e.lineCoordinates[0]),i.setAttribute("y1",e.rect[3]-e.lineCoordinates[1]),i.setAttribute("x2",e.rect[2]-e.lineCoordinates[2]),i.setAttribute("y2",e.rect[3]-e.lineCoordinates[3]),i.setAttribute("stroke-width",e.borderStyle.width),i.setAttribute("stroke","transparent"),n.appendChild(i),this.container.append(n),this._createPopup(this.container,i,e),this.container}}]),t}(g),T=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="squareAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:rect");return a.setAttribute("x",i/2),a.setAttribute("y",i/2),a.setAttribute("width",t-i),a.setAttribute("height",r-i),a.setAttribute("stroke-width",i),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(g),E=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="circleAnnotation";var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=e.borderStyle.width,a=this.svgFactory.createElement("svg:ellipse");return a.setAttribute("cx",t/2),a.setAttribute("cy",r/2),a.setAttribute("rx",t/2-i/2),a.setAttribute("ry",r/2-i/2),a.setAttribute("stroke-width",i),a.setAttribute("stroke","transparent"),a.setAttribute("fill","none"),n.appendChild(a),this.container.append(n),this._createPopup(this.container,a,e),this.container}}]),t}(g),O=function(e){function t(e){var r;f(this,t);var n=!!(e.data.hasPopup||e.data.title||e.data.contents);return(r=s(this,c(t).call(this,e,n,!0))).containerClassName="polylineAnnotation",r.svgElementName="svg:polyline",r}return l(t,e),p(t,[{key:"render",value:function(){this.container.className=this.containerClassName;var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=[],a=!0,o=!1,s=void 0;try{for(var u,c=e.vertices[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value,h=l.x-e.rect[0],f=e.rect[3]-l.y;i.push(h+","+f)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}i=i.join(" ");var d=this.svgFactory.createElement(this.svgElementName);return d.setAttribute("points",i),d.setAttribute("stroke-width",e.borderStyle.width),d.setAttribute("stroke","transparent"),d.setAttribute("fill","none"),n.appendChild(d),this.container.append(n),this._createPopup(this.container,d,e),this.container}}]),t}(g),L=function(e){function t(e){var r;return f(this,t),(r=s(this,c(t).call(this,e))).containerClassName="polygonAnnotation",r.svgElementName="svg:polygon",r}return l(t,e),t}(O),F=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="caretAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),I=function(e){function t(e){var r;f(this,t);var n=!!(e.data.hasPopup||e.data.title||e.data.contents);return(r=s(this,c(t).call(this,e,n,!0))).containerClassName="inkAnnotation",r.svgElementName="svg:polyline",r}return l(t,e),p(t,[{key:"render",value:function(){this.container.className=this.containerClassName;var e=this.data,t=e.rect[2]-e.rect[0],r=e.rect[3]-e.rect[1],n=this.svgFactory.create(t,r),i=!0,a=!1,o=void 0;try{for(var s,u=e.inkLists[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=[],h=!0,f=!1,d=void 0;try{for(var p,v=c[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var g=p.value,m=g.x-e.rect[0],y=e.rect[3]-g.y;l.push("".concat(m,",").concat(y))}}catch(e){f=!0,d=e}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}l=l.join(" ");var b=this.svgFactory.createElement(this.svgElementName);b.setAttribute("points",l),b.setAttribute("stroke-width",e.borderStyle.width),b.setAttribute("stroke","transparent"),b.setAttribute("fill","none"),this._createPopup(this.container,b,e),n.appendChild(b)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return this.container.append(n),this.container}}]),t}(g),j=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),M=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),N=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),D=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),q=function(e){function t(e){f(this,t);var r=!!(e.data.hasPopup||e.data.title||e.data.contents);return s(this,c(t).call(this,e,r,!0))}return l(t,e),p(t,[{key:"render",value:function(){return this.container.className="stampAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}]),t}(g),U=function(e){function t(e){var r;f(this,t);var a=(r=s(this,c(t).call(this,e,!0))).data.file,o=a.filename,l=a.content;return r.filename=(0,n.getFilenameFromUrl)(o),r.content=l,r.linkService.eventBus&&r.linkService.eventBus.dispatch("fileattachmentannotation",{source:u(r),id:(0,i.stringToPDFString)(o),filename:o,content:l}),r}return l(t,e),p(t,[{key:"render",value:function(){this.container.className="fileAttachmentAnnotation";var e=document.createElement("div");return e.style.height=this.container.style.height,e.style.width=this.container.style.width,e.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,e,this.data),this.container.appendChild(e),this.container}},{key:"_download",value:function(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,i.warn)("Download cannot be started due to unavailable download manager")}}]),t}(g),W=function(){function e(){f(this,e)}return p(e,null,[{key:"render",value:function(e){var t=!0,r=!1,i=void 0;try{for(var a,o=e.annotations[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value;if(s){var u=v.create({data:s,layer:e.div,page:e.page,viewport:e.viewport,linkService:e.linkService,downloadManager:e.downloadManager,imageResourcesPath:e.imageResourcesPath||"",renderInteractiveForms:e.renderInteractiveForms||!1,svgFactory:new n.DOMSVGFactory});u.isRenderable&&e.div.appendChild(u.render())}}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"update",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=e.annotations[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=e.div.querySelector('[data-annotation-id="'.concat(o.id,'"]'));s&&(s.style.transform="matrix(".concat(e.viewport.transform.join(","),")"))}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}e.div.removeAttribute("hidden")}}]),e}();t.AnnotationLayer=W},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SVGGraphics=void 0;var n,i=r(1),a=r(183),o=(n=r(4))&&n.__esModule?n:{default:n};function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){throw new Error("Not implemented: SVGGraphics")};t.SVGGraphics=f;var d=function(e){if(Number.isInteger(e))return e.toString();var t=e.toFixed(10),r=t.length-1;if("0"!==t[r])return t;do{r--}while("0"===t[r]);return t.substring(0,"."===t[r]?r:r+1)},p=function(e){if(0===e[4]&&0===e[5]){if(0===e[1]&&0===e[2])return 1===e[0]&&1===e[3]?"":"scale(".concat(d(e[0])," ").concat(d(e[3]),")");if(e[0]===e[3]&&e[1]===-e[2]){var t=180*Math.acos(e[0])/Math.PI;return"rotate(".concat(d(t),")")}}else if(1===e[0]&&0===e[1]&&0===e[2]&&1===e[3])return"translate(".concat(d(e[4])," ").concat(d(e[5]),")");return"matrix(".concat(d(e[0])," ").concat(d(e[1])," ").concat(d(e[2])," ").concat(d(e[3])," ").concat(d(e[4])," ")+"".concat(d(e[5]),")")},v={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},g="http://www.w3.org/1999/xlink",m=["butt","round","square"],y=["miter","round","bevel"],b=function(){for(var e=new Uint8Array([137,80,78,71,13,10,26,10]),t=12,r=new Int32Array(256),n=0;n<256;n++){for(var a=n,s=0;s<8;s++)a=1&a?3988292384^a>>1&2147483647:a>>1&2147483647;r[n]=a}function u(e,t,n,i){var a=i,o=t.length;n[a]=o>>24&255,n[a+1]=o>>16&255,n[a+2]=o>>8&255,n[a+3]=255&o,n[a+=4]=255&e.charCodeAt(0),n[a+1]=255&e.charCodeAt(1),n[a+2]=255&e.charCodeAt(2),n[a+3]=255&e.charCodeAt(3),a+=4,n.set(t,a);var s=function(e,t,n){for(var i=-1,a=t;a<n;a++){var o=255&(i^e[a]);i=i>>>8^r[o]}return-1^i}(n,i+4,a+=t.length);n[a]=s>>24&255,n[a+1]=s>>16&255,n[a+2]=s>>8&255,n[a+3]=255&s}function c(e){var t=e.length,r=Math.ceil(t/65535),n=new Uint8Array(2+t+5*r+4),i=0;n[i++]=120,n[i++]=156;for(var a=0;t>65535;)n[i++]=0,n[i++]=255,n[i++]=255,n[i++]=0,n[i++]=0,n.set(e.subarray(a,a+65535),i),i+=65535,a+=65535,t-=65535;n[i++]=1,n[i++]=255&t,n[i++]=t>>8&255,n[i++]=255&~t,n[i++]=(65535&~t)>>8&255,n.set(e.subarray(a),i),i+=e.length-a;var o=function(e,t,r){for(var n=1,i=0,a=t;a<r;++a)i=(i+(n=(n+(255&e[a]))%65521))%65521;return i<<16|n}(e,0,e.length);return n[i++]=o>>24&255,n[i++]=o>>16&255,n[i++]=o>>8&255,n[i++]=255&o,n}function l(r,n,a,s){var l,h,f,d=r.width,p=r.height,v=r.data;switch(n){case i.ImageKind.GRAYSCALE_1BPP:h=0,l=1,f=d+7>>3;break;case i.ImageKind.RGB_24BPP:h=2,l=8,f=3*d;break;case i.ImageKind.RGBA_32BPP:h=6,l=8,f=4*d;break;default:throw new Error("invalid format")}for(var g=new Uint8Array((1+f)*p),m=0,y=0,b=0;b<p;++b)g[m++]=0,g.set(v.subarray(y,y+f),m),y+=f,m+=f;if(n===i.ImageKind.GRAYSCALE_1BPP&&s){m=0;for(var _=0;_<p;_++){m++;for(var A=0;A<f;A++)g[m++]^=255}}var S=new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,p>>24&255,p>>16&255,p>>8&255,255&p,l,h,0,0,0]),w=function(e){if(!(0,o.default)())return c(e);try{var t;t=parseInt(process.versions.node)>=8?e:new Buffer(e);var r=require("zlib").deflateSync(t,{level:9});return r instanceof Uint8Array?r:new Uint8Array(r)}catch(e){(0,i.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+e)}return c(e)}(g),k=e.length+3*t+S.length+w.length,x=new Uint8Array(k),C=0;return x.set(e,C),u("IHDR",S,x,C+=e.length),u("IDATA",w,x,C+=t+S.length),C+=t+w.length,u("IEND",new Uint8Array(0),x,C),(0,i.createObjectURL)(x,"image/png",a)}return function(e,t,r){return l(e,void 0===e.kind?i.ImageKind.GRAYSCALE_1BPP:e.kind,t,r)}}(),_=function(){function e(){c(this,e),this.fontSizeScale=1,this.fontWeight=v.fontWeight,this.fontSize=0,this.textMatrix=i.IDENTITY_MATRIX,this.fontMatrix=i.FONT_IDENTITY_MATRIX,this.leading=0,this.textRenderingMode=i.TextRenderingMode.FILL,this.textMatrixScale=1,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=v.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""}return h(e,[{key:"clone",value:function(){return Object.create(this)}},{key:"setCurrentPoint",value:function(e,t){this.x=e,this.y=t}}]),e}(),A=0,S=0,w=0;t.SVGGraphics=f=function(){function e(t,r,n){for(var o in c(this,e),this.svgFactory=new a.DOMSVGFactory,this.current=new _,this.transformMatrix=i.IDENTITY_MATRIX,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=r,this.pendingClip=null,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!n,this._operatorIdMapping=[],i.OPS)this._operatorIdMapping[i.OPS[o]]=o}return h(e,[{key:"save",value:function(){this.transformStack.push(this.transformMatrix);var e=this.current;this.extraStack.push(e),this.current=e.clone()}},{key:"restore",value:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.pendingClip=null,this.tgrp=null}},{key:"group",value:function(e){this.save(),this.executeOpTree(e),this.restore()}},{key:"loadDependencies",value:function(e){for(var t=this,r=e.fnArray,n=e.argsArray,a=0,o=r.length;a<o;a++)if(r[a]===i.OPS.dependency){var s=!0,u=!1,c=void 0;try{for(var l,h=function(){var e=l.value,r=e.startsWith("g_")?t.commonObjs:t.objs,n=new Promise((function(t){r.get(e,t)}));t.current.dependencies.push(n)},f=n[a][Symbol.iterator]();!(s=(l=f.next()).done);s=!0)h()}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function(e,t,r,n,a,o){var s=[e,t,r,n,a,o];this.transformMatrix=i.Util.transform(this.transformMatrix,s),this.tgrp=null}},{key:"getSVG",value:function(e,t){var r=this;this.viewport=t;var n=this._initialize(t);return this.loadDependencies(e).then((function(){return r.transformMatrix=i.IDENTITY_MATRIX,r.executeOpTree(r.convertOpList(e)),n}))}},{key:"convertOpList",value:function(e){for(var t=this._operatorIdMapping,r=e.argsArray,n=e.fnArray,i=[],a=0,o=n.length;a<o;a++){var s=n[a];i.push({fnId:s,fn:t[s],args:r[a]})}return function(e){var t=[],r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;"save"!==u.fn?"restore"===u.fn?t=r.pop():t.push(u):(t.push({fnId:92,fn:"group",items:[]}),r.push(t),t=t[t.length-1].items)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return t}(i)}},{key:"executeOpTree",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=a.value,u=s.fn,c=s.fnId,l=s.args;switch(0|c){case i.OPS.beginText:this.beginText();break;case i.OPS.dependency:break;case i.OPS.setLeading:this.setLeading(l);break;case i.OPS.setLeadingMoveText:this.setLeadingMoveText(l[0],l[1]);break;case i.OPS.setFont:this.setFont(l);break;case i.OPS.showText:case i.OPS.showSpacedText:this.showText(l[0]);break;case i.OPS.endText:this.endText();break;case i.OPS.moveText:this.moveText(l[0],l[1]);break;case i.OPS.setCharSpacing:this.setCharSpacing(l[0]);break;case i.OPS.setWordSpacing:this.setWordSpacing(l[0]);break;case i.OPS.setHScale:this.setHScale(l[0]);break;case i.OPS.setTextMatrix:this.setTextMatrix(l[0],l[1],l[2],l[3],l[4],l[5]);break;case i.OPS.setTextRise:this.setTextRise(l[0]);break;case i.OPS.setTextRenderingMode:this.setTextRenderingMode(l[0]);break;case i.OPS.setLineWidth:this.setLineWidth(l[0]);break;case i.OPS.setLineJoin:this.setLineJoin(l[0]);break;case i.OPS.setLineCap:this.setLineCap(l[0]);break;case i.OPS.setMiterLimit:this.setMiterLimit(l[0]);break;case i.OPS.setFillRGBColor:this.setFillRGBColor(l[0],l[1],l[2]);break;case i.OPS.setStrokeRGBColor:this.setStrokeRGBColor(l[0],l[1],l[2]);break;case i.OPS.setStrokeColorN:this.setStrokeColorN(l);break;case i.OPS.setFillColorN:this.setFillColorN(l);break;case i.OPS.shadingFill:this.shadingFill(l[0]);break;case i.OPS.setDash:this.setDash(l[0],l[1]);break;case i.OPS.setRenderingIntent:this.setRenderingIntent(l[0]);break;case i.OPS.setFlatness:this.setFlatness(l[0]);break;case i.OPS.setGState:this.setGState(l[0]);break;case i.OPS.fill:this.fill();break;case i.OPS.eoFill:this.eoFill();break;case i.OPS.stroke:this.stroke();break;case i.OPS.fillStroke:this.fillStroke();break;case i.OPS.eoFillStroke:this.eoFillStroke();break;case i.OPS.clip:this.clip("nonzero");break;case i.OPS.eoClip:this.clip("evenodd");break;case i.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case i.OPS.paintJpegXObject:this.paintJpegXObject(l[0],l[1],l[2]);break;case i.OPS.paintImageXObject:this.paintImageXObject(l[0]);break;case i.OPS.paintInlineImageXObject:this.paintInlineImageXObject(l[0]);break;case i.OPS.paintImageMaskXObject:this.paintImageMaskXObject(l[0]);break;case i.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(l[0],l[1]);break;case i.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case i.OPS.closePath:this.closePath();break;case i.OPS.closeStroke:this.closeStroke();break;case i.OPS.closeFillStroke:this.closeFillStroke();break;case i.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case i.OPS.nextLine:this.nextLine();break;case i.OPS.transform:this.transform(l[0],l[1],l[2],l[3],l[4],l[5]);break;case i.OPS.constructPath:this.constructPath(l[0],l[1]);break;case i.OPS.endPath:this.endPath();break;case 92:this.group(s.items);break;default:(0,i.warn)("Unimplemented operator ".concat(u))}}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"setWordSpacing",value:function(e){this.current.wordSpacing=e}},{key:"setCharSpacing",value:function(e){this.current.charSpacing=e}},{key:"nextLine",value:function(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function(e,t,r,n,i,a){var o=this.current;o.textMatrix=o.lineMatrix=[e,t,r,n,i,a],o.textMatrixScale=Math.sqrt(e*e+t*t),o.x=o.lineX=0,o.y=o.lineY=0,o.xcoords=[],o.tspan=this.svgFactory.createElement("svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size","".concat(d(o.fontSize),"px")),o.tspan.setAttributeNS(null,"y",d(-o.y)),o.txtElement=this.svgFactory.createElement("svg:text"),o.txtElement.appendChild(o.tspan)}},{key:"beginText",value:function(){var e=this.current;e.x=e.lineX=0,e.y=e.lineY=0,e.textMatrix=i.IDENTITY_MATRIX,e.lineMatrix=i.IDENTITY_MATRIX,e.textMatrixScale=1,e.tspan=this.svgFactory.createElement("svg:tspan"),e.txtElement=this.svgFactory.createElement("svg:text"),e.txtgrp=this.svgFactory.createElement("svg:g"),e.xcoords=[]}},{key:"moveText",value:function(e,t){var r=this.current;r.x=r.lineX+=e,r.y=r.lineY+=t,r.xcoords=[],r.tspan=this.svgFactory.createElement("svg:tspan"),r.tspan.setAttributeNS(null,"font-family",r.fontFamily),r.tspan.setAttributeNS(null,"font-size","".concat(d(r.fontSize),"px")),r.tspan.setAttributeNS(null,"y",d(-r.y))}},{key:"showText",value:function(e){var t=this.current,r=t.font,n=t.fontSize;if(0!==n){var a=t.charSpacing,o=t.wordSpacing,s=t.fontDirection,u=t.textHScale*s,c=r.vertical,l=n*t.fontMatrix[0],h=0,f=!0,g=!1,m=void 0;try{for(var y,b=e[Symbol.iterator]();!(f=(y=b.next()).done);f=!0){var _=y.value;if(null!==_)if((0,i.isNum)(_))h+=-_*n*.001;else{var A=_.width,S=_.fontChar,w=A*l+((_.isSpace?o:0)+a)*s;_.isInFont||r.missingFile?(t.xcoords.push(t.x+h*u),t.tspan.textContent+=S,h+=w):h+=w}else h+=s*o}}catch(e){g=!0,m=e}finally{try{f||null==b.return||b.return()}finally{if(g)throw m}}c?t.y-=h*u:t.x+=h*u,t.tspan.setAttributeNS(null,"x",t.xcoords.map(d).join(" ")),t.tspan.setAttributeNS(null,"y",d(-t.y)),t.tspan.setAttributeNS(null,"font-family",t.fontFamily),t.tspan.setAttributeNS(null,"font-size","".concat(d(t.fontSize),"px")),t.fontStyle!==v.fontStyle&&t.tspan.setAttributeNS(null,"font-style",t.fontStyle),t.fontWeight!==v.fontWeight&&t.tspan.setAttributeNS(null,"font-weight",t.fontWeight);var k=t.textRenderingMode&i.TextRenderingMode.FILL_STROKE_MASK;if(k===i.TextRenderingMode.FILL||k===i.TextRenderingMode.FILL_STROKE?(t.fillColor!==v.fillColor&&t.tspan.setAttributeNS(null,"fill",t.fillColor),t.fillAlpha<1&&t.tspan.setAttributeNS(null,"fill-opacity",t.fillAlpha)):t.textRenderingMode===i.TextRenderingMode.ADD_TO_PATH?t.tspan.setAttributeNS(null,"fill","transparent"):t.tspan.setAttributeNS(null,"fill","none"),k===i.TextRenderingMode.STROKE||k===i.TextRenderingMode.FILL_STROKE){var x=1/(t.textMatrixScale||1);this._setStrokeAttributes(t.tspan,x)}var C=t.textMatrix;0!==t.textRise&&((C=C.slice())[5]+=t.textRise),t.txtElement.setAttributeNS(null,"transform","".concat(p(C)," scale(1, -1)")),t.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.txtElement.appendChild(t.tspan),t.txtgrp.appendChild(t.txtElement),this._ensureTransformGroup().appendChild(t.txtElement)}}},{key:"setLeadingMoveText",value:function(e,t){this.setLeading(-t),this.moveText(e,t)}},{key:"addFontStyle",value:function(e){this.cssStyle||(this.cssStyle=this.svgFactory.createElement("svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle));var t=(0,i.createObjectURL)(e.data,e.mimetype,this.forceDataSchema);this.cssStyle.textContent+='@font-face { font-family: "'.concat(e.loadedName,'";')+" src: url(".concat(t,"); }\n")}},{key:"setFont",value:function(e){var t=this.current,r=this.commonObjs.get(e[0]),n=e[1];t.font=r,this.embedFonts&&r.data&&!this.embeddedFonts[r.loadedName]&&(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),t.fontMatrix=r.fontMatrix?r.fontMatrix:i.FONT_IDENTITY_MATRIX;var a=r.black?r.bold?"bolder":"bold":r.bold?"bold":"normal",o=r.italic?"italic":"normal";n<0?(n=-n,t.fontDirection=-1):t.fontDirection=1,t.fontSize=n,t.fontFamily=r.loadedName,t.fontWeight=a,t.fontStyle=o,t.tspan=this.svgFactory.createElement("svg:tspan"),t.tspan.setAttributeNS(null,"y",d(-t.y)),t.xcoords=[]}},{key:"endText",value:function(){var e=this.current;e.textRenderingMode&i.TextRenderingMode.ADD_TO_PATH_FLAG&&e.txtElement&&e.txtElement.hasChildNodes()&&(e.element=e.txtElement,this.clip("nonzero"),this.endPath())}},{key:"setLineWidth",value:function(e){e>0&&(this.current.lineWidth=e)}},{key:"setLineCap",value:function(e){this.current.lineCap=m[e]}},{key:"setLineJoin",value:function(e){this.current.lineJoin=y[e]}},{key:"setMiterLimit",value:function(e){this.current.miterLimit=e}},{key:"setStrokeAlpha",value:function(e){this.current.strokeAlpha=e}},{key:"setStrokeRGBColor",value:function(e,t,r){this.current.strokeColor=i.Util.makeCssRgb(e,t,r)}},{key:"setFillAlpha",value:function(e){this.current.fillAlpha=e}},{key:"setFillRGBColor",value:function(e,t,r){this.current.fillColor=i.Util.makeCssRgb(e,t,r),this.current.tspan=this.svgFactory.createElement("svg:tspan"),this.current.xcoords=[]}},{key:"setStrokeColorN",value:function(e){this.current.strokeColor=this._makeColorN_Pattern(e)}},{key:"setFillColorN",value:function(e){this.current.fillColor=this._makeColorN_Pattern(e)}},{key:"shadingFill",value:function(e){var t=this.viewport.width,r=this.viewport.height,n=i.Util.inverseTransform(this.transformMatrix),a=i.Util.applyTransform([0,0],n),o=i.Util.applyTransform([0,r],n),s=i.Util.applyTransform([t,0],n),u=i.Util.applyTransform([t,r],n),c=Math.min(a[0],o[0],s[0],u[0]),l=Math.min(a[1],o[1],s[1],u[1]),h=Math.max(a[0],o[0],s[0],u[0]),f=Math.max(a[1],o[1],s[1],u[1]),d=this.svgFactory.createElement("svg:rect");d.setAttributeNS(null,"x",c),d.setAttributeNS(null,"y",l),d.setAttributeNS(null,"width",h-c),d.setAttributeNS(null,"height",f-l),d.setAttributeNS(null,"fill",this._makeShadingPattern(e)),this._ensureTransformGroup().appendChild(d)}},{key:"_makeColorN_Pattern",value:function(e){return"TilingPattern"===e[0]?this._makeTilingPattern(e):this._makeShadingPattern(e)}},{key:"_makeTilingPattern",value:function(e){var t=e[1],r=e[2],n=e[3]||i.IDENTITY_MATRIX,a=u(e[4],4),o=a[0],c=a[1],l=a[2],h=a[3],f=e[5],d=e[6],p=e[7],v="shading".concat(w++),g=u(i.Util.applyTransform([o,c],n),2),m=g[0],y=g[1],b=u(i.Util.applyTransform([l,h],n),2),_=b[0],A=b[1],S=u(i.Util.singularValueDecompose2dScale(n),2),k=f*S[0],x=d*S[1],C=this.svgFactory.createElement("svg:pattern");C.setAttributeNS(null,"id",v),C.setAttributeNS(null,"patternUnits","userSpaceOnUse"),C.setAttributeNS(null,"width",k),C.setAttributeNS(null,"height",x),C.setAttributeNS(null,"x","".concat(m)),C.setAttributeNS(null,"y","".concat(y));var P=this.svg,R=this.transformMatrix,T=this.current.fillColor,E=this.current.strokeColor,O=this.svgFactory.create(_-m,A-y);if(this.svg=O,this.transformMatrix=n,2===p){var L=i.Util.makeCssRgb.apply(i.Util,s(t));this.current.fillColor=L,this.current.strokeColor=L}return this.executeOpTree(this.convertOpList(r)),this.svg=P,this.transformMatrix=R,this.current.fillColor=T,this.current.strokeColor=E,C.appendChild(O.childNodes[0]),this.defs.appendChild(C),"url(#".concat(v,")")}},{key:"_makeShadingPattern",value:function(e){switch(e[0]){case"RadialAxial":var t,r="shading".concat(w++),n=e[2];switch(e[1]){case"axial":var a=e[3],o=e[4];(t=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"x1",a[0]),t.setAttributeNS(null,"y1",a[1]),t.setAttributeNS(null,"x2",o[0]),t.setAttributeNS(null,"y2",o[1]);break;case"radial":var s=e[3],u=e[4],c=e[5],l=e[6];(t=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",r),t.setAttributeNS(null,"gradientUnits","userSpaceOnUse"),t.setAttributeNS(null,"cx",u[0]),t.setAttributeNS(null,"cy",u[1]),t.setAttributeNS(null,"r",l),t.setAttributeNS(null,"fx",s[0]),t.setAttributeNS(null,"fy",s[1]),t.setAttributeNS(null,"fr",c);break;default:throw new Error("Unknown RadialAxial type: ".concat(e[1]))}var h=!0,f=!1,d=void 0;try{for(var p,v=n[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){var g=p.value,m=this.svgFactory.createElement("svg:stop");m.setAttributeNS(null,"offset",g[0]),m.setAttributeNS(null,"stop-color",g[1]),t.appendChild(m)}}catch(e){f=!0,d=e}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}return this.defs.appendChild(t),"url(#".concat(r,")");case"Mesh":return(0,i.warn)("Unimplemented pattern Mesh"),null;case"Dummy":return"hotpink";default:throw new Error("Unknown IR type: ".concat(e[0]))}}},{key:"setDash",value:function(e,t){this.current.dashArray=e,this.current.dashPhase=t}},{key:"constructPath",value:function(e,t){var r=this.current,n=r.x,a=r.y,o=[],s=0,u=!0,c=!1,l=void 0;try{for(var h,f=e[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){switch(0|h.value){case i.OPS.rectangle:n=t[s++],a=t[s++];var p=t[s++],v=t[s++],g=n+p,m=a+v;o.push("M",d(n),d(a),"L",d(g),d(a),"L",d(g),d(m),"L",d(n),d(m),"Z");break;case i.OPS.moveTo:n=t[s++],a=t[s++],o.push("M",d(n),d(a));break;case i.OPS.lineTo:n=t[s++],a=t[s++],o.push("L",d(n),d(a));break;case i.OPS.curveTo:n=t[s+4],a=t[s+5],o.push("C",d(t[s]),d(t[s+1]),d(t[s+2]),d(t[s+3]),d(n),d(a)),s+=6;break;case i.OPS.curveTo2:n=t[s+2],a=t[s+3],o.push("C",d(n),d(a),d(t[s]),d(t[s+1]),d(t[s+2]),d(t[s+3])),s+=4;break;case i.OPS.curveTo3:n=t[s+2],a=t[s+3],o.push("C",d(t[s]),d(t[s+1]),d(n),d(a),d(n),d(a)),s+=4;break;case i.OPS.closePath:o.push("Z")}}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}o=o.join(" "),r.path&&e.length>0&&e[0]!==i.OPS.rectangle&&e[0]!==i.OPS.moveTo?o=r.path.getAttributeNS(null,"d")+o:(r.path=this.svgFactory.createElement("svg:path"),this._ensureTransformGroup().appendChild(r.path)),r.path.setAttributeNS(null,"d",o),r.path.setAttributeNS(null,"fill","none"),r.element=r.path,r.setCurrentPoint(n,a)}},{key:"endPath",value:function(){var e=this.current;if(e.path=null,this.pendingClip)if(e.element){var t="clippath".concat(A++),r=this.svgFactory.createElement("svg:clipPath");r.setAttributeNS(null,"id",t),r.setAttributeNS(null,"transform",p(this.transformMatrix));var n=e.element.cloneNode(!0);"evenodd"===this.pendingClip?n.setAttributeNS(null,"clip-rule","evenodd"):n.setAttributeNS(null,"clip-rule","nonzero"),this.pendingClip=null,r.appendChild(n),this.defs.appendChild(r),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach((function(e){e.clipGroup=null})),r.setAttributeNS(null,"clip-path",e.activeClipUrl)),e.activeClipUrl="url(#".concat(t,")"),this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function(e){this.pendingClip=e}},{key:"closePath",value:function(){var e=this.current;if(e.path){var t="".concat(e.path.getAttributeNS(null,"d"),"Z");e.path.setAttributeNS(null,"d",t)}}},{key:"setLeading",value:function(e){this.current.leading=-e}},{key:"setTextRise",value:function(e){this.current.textRise=e}},{key:"setTextRenderingMode",value:function(e){this.current.textRenderingMode=e}},{key:"setHScale",value:function(e){this.current.textHScale=e/100}},{key:"setRenderingIntent",value:function(e){}},{key:"setFlatness",value:function(e){}},{key:"setGState",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var s=u(a.value,2),c=s[0],l=s[1];switch(c){case"LW":this.setLineWidth(l);break;case"LC":this.setLineCap(l);break;case"LJ":this.setLineJoin(l);break;case"ML":this.setMiterLimit(l);break;case"D":this.setDash(l[0],l[1]);break;case"RI":this.setRenderingIntent(l);break;case"FL":this.setFlatness(l);break;case"Font":this.setFont(l);break;case"CA":this.setStrokeAlpha(l);break;case"ca":this.setFillAlpha(l);break;default:(0,i.warn)("Unimplemented graphic state operator ".concat(c))}}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"fill",value:function(){var e=this.current;e.element&&(e.element.setAttributeNS(null,"fill",e.fillColor),e.element.setAttributeNS(null,"fill-opacity",e.fillAlpha),this.endPath())}},{key:"stroke",value:function(){var e=this.current;e.element&&(this._setStrokeAttributes(e.element),e.element.setAttributeNS(null,"fill","none"),this.endPath())}},{key:"_setStrokeAttributes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.current,n=r.dashArray;1!==t&&n.length>0&&(n=n.map((function(e){return t*e}))),e.setAttributeNS(null,"stroke",r.strokeColor),e.setAttributeNS(null,"stroke-opacity",r.strokeAlpha),e.setAttributeNS(null,"stroke-miterlimit",d(r.miterLimit)),e.setAttributeNS(null,"stroke-linecap",r.lineCap),e.setAttributeNS(null,"stroke-linejoin",r.lineJoin),e.setAttributeNS(null,"stroke-width",d(t*r.lineWidth)+"px"),e.setAttributeNS(null,"stroke-dasharray",n.map(d).join(" ")),e.setAttributeNS(null,"stroke-dashoffset",d(t*r.dashPhase)+"px")}},{key:"eoFill",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fill()}},{key:"fillStroke",value:function(){this.stroke(),this.fill()}},{key:"eoFillStroke",value:function(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()}},{key:"closeStroke",value:function(){this.closePath(),this.stroke()}},{key:"closeFillStroke",value:function(){this.closePath(),this.fillStroke()}},{key:"closeEOFillStroke",value:function(){this.closePath(),this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function(){var e=this.svgFactory.createElement("svg:rect");e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",this.current.fillColor),this._ensureTransformGroup().appendChild(e)}},{key:"paintJpegXObject",value:function(e,t,r){var n=this.objs.get(e),i=this.svgFactory.createElement("svg:image");i.setAttributeNS(g,"xlink:href",n.src),i.setAttributeNS(null,"width",d(t)),i.setAttributeNS(null,"height",d(r)),i.setAttributeNS(null,"x","0"),i.setAttributeNS(null,"y",d(-r)),i.setAttributeNS(null,"transform","scale(".concat(d(1/t)," ").concat(d(-1/r),")")),this._ensureTransformGroup().appendChild(i)}},{key:"paintImageXObject",value:function(e){var t=this.objs.get(e);t?this.paintInlineImageXObject(t):(0,i.warn)("Dependent image with object ID ".concat(e," is not ready yet"))}},{key:"paintInlineImageXObject",value:function(e,t){var r=e.width,n=e.height,i=b(e,this.forceDataSchema,!!t),a=this.svgFactory.createElement("svg:rect");a.setAttributeNS(null,"x","0"),a.setAttributeNS(null,"y","0"),a.setAttributeNS(null,"width",d(r)),a.setAttributeNS(null,"height",d(n)),this.current.element=a,this.clip("nonzero");var o=this.svgFactory.createElement("svg:image");o.setAttributeNS(g,"xlink:href",i),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",d(-n)),o.setAttributeNS(null,"width",d(r)+"px"),o.setAttributeNS(null,"height",d(n)+"px"),o.setAttributeNS(null,"transform","scale(".concat(d(1/r)," ").concat(d(-1/n),")")),t?t.appendChild(o):this._ensureTransformGroup().appendChild(o)}},{key:"paintImageMaskXObject",value:function(e){var t=this.current,r=e.width,n=e.height,i=t.fillColor;t.maskId="mask".concat(S++);var a=this.svgFactory.createElement("svg:mask");a.setAttributeNS(null,"id",t.maskId);var o=this.svgFactory.createElement("svg:rect");o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",d(r)),o.setAttributeNS(null,"height",d(n)),o.setAttributeNS(null,"fill",i),o.setAttributeNS(null,"mask","url(#".concat(t.maskId,")")),this.defs.appendChild(a),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(e,a)}},{key:"paintFormXObjectBegin",value:function(e,t){if(Array.isArray(e)&&6===e.length&&this.transform(e[0],e[1],e[2],e[3],e[4],e[5]),t){var r=t[2]-t[0],n=t[3]-t[1],i=this.svgFactory.createElement("svg:rect");i.setAttributeNS(null,"x",t[0]),i.setAttributeNS(null,"y",t[1]),i.setAttributeNS(null,"width",d(r)),i.setAttributeNS(null,"height",d(n)),this.current.element=i,this.clip("nonzero"),this.endPath()}}},{key:"paintFormXObjectEnd",value:function(){}},{key:"_initialize",value:function(e){var t=this.svgFactory.create(e.width,e.height),r=this.svgFactory.createElement("svg:defs");t.appendChild(r),this.defs=r;var n=this.svgFactory.createElement("svg:g");return n.setAttributeNS(null,"transform",p(e.transform)),t.appendChild(n),this.svg=n,t}},{key:"_ensureClipGroup",value:function(){if(!this.current.clipGroup){var e=this.svgFactory.createElement("svg:g");e.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(e),this.current.clipGroup=e}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function(){return this.tgrp||(this.tgrp=this.svgFactory.createElement("svg:g"),this.tgrp.setAttributeNS(null,"transform",p(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNodeStream=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1),o=r(198);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function d(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){f(a,n,i,o,s,"next",e)}function s(e){f(a,n,i,o,s,"throw",e)}o(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var m=require("fs"),y=require("http"),b=require("https"),_=require("url"),A=/^file:\/\/\/[a-zA-Z]:\//;var S=function(){function e(t){var r,n;p(this,e),this.source=t,this.url=(r=t.url,"file:"===(n=_.parse(r)).protocol||n.host?n:/^[a-z]:[\/\\]/i.test(r)?_.parse("file:///".concat(r)):(n.host||(n.protocol="file:"),n)),this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol,this.isFsUrl="file:"===this.url.protocol,this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return g(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=this.isFsUrl?new R(this):new C(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null;var r=this.isFsUrl?new T(this,e,t):new P(this,e,t);return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}();t.PDFNodeStream=S;var w=function(){function e(t){p(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null;var r=t.source;this._contentLength=r.length,this._loaded=0,this._filename=null,this._disableRange=r.disableRange||!1,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!r.disableStream,this._isRangeSupported=!r.disableRange,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)(),this._headersCapability=(0,a.createPromiseCapability)()}var t;return g(e,[{key:"read",value:(t=d(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise;case 2:if(!this._done){e.next=4;break}return e.abrupt("return",{value:void 0,done:!0});case 4:if(!this._storedError){e.next=6;break}throw this._storedError;case 6:if(null!==(t=this._readableStream.read())){e.next=10;break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read());case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1});case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this;this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),!this._isStreamingSupported&&this._isRangeSupported&&this._error(new a.AbortException("streaming is disabled")),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),k=function(){function e(t){p(this,e),this._url=t.url,this._done=!1,this._storedError=null,this.onProgress=null,this._loaded=0,this._readableStream=null,this._readCapability=(0,a.createPromiseCapability)();var r=t.source;this._isStreamingSupported=!r.disableStream}var t;return g(e,[{key:"read",value:(t=d(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise;case 2:if(!this._done){e.next=4;break}return e.abrupt("return",{value:void 0,done:!0});case 4:if(!this._storedError){e.next=6;break}throw this._storedError;case 6:if(null!==(t=this._readableStream.read())){e.next=10;break}return this._readCapability=(0,a.createPromiseCapability)(),e.abrupt("return",this.read());case 10:return this._loaded+=t.length,this.onProgress&&this.onProgress({loaded:this._loaded}),r=new Uint8Array(t).buffer,e.abrupt("return",{value:r,done:!1});case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._readableStream?this._readableStream.destroy(e):this._error(e)}},{key:"_error",value:function(e){this._storedError=e,this._readCapability.resolve()}},{key:"_setReadableStream",value:function(e){var t=this;this._readableStream=e,e.on("readable",(function(){t._readCapability.resolve()})),e.on("end",(function(){e.destroy(),t._done=!0,t._readCapability.resolve()})),e.on("error",(function(e){t._error(e)})),this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}();function x(e,t){return{protocol:e.protocol,auth:e.auth,host:e.hostname,port:e.port,path:e.path,method:"GET",headers:t}}var C=function(e){function t(e){var r;p(this,t);var n=function(t){if(404===t.statusCode){var n=new a.MissingPDFException('Missing PDF "'.concat(r._url,'".'));return r._storedError=n,void r._headersCapability.reject(n)}r._headersCapability.resolve(),r._setReadableStream(t);var i=function(e){return r._readableStream.headers[e.toLowerCase()]},s=(0,o.validateRangeRequestCapabilities)({getResponseHeader:i,isHttp:e.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),u=s.allowRangeRequests,c=s.suggestedLength;r._isRangeSupported=u,r._contentLength=c||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(i)};return(r=u(this,c(t).call(this,e)))._request=null,"http:"===r._url.protocol?r._request=y.request(x(r._url,e.httpHeaders),n):r._request=b.request(x(r._url,e.httpHeaders),n),r._request.on("error",(function(e){r._storedError=e,r._headersCapability.reject(e)})),r._request.end(),r}return l(t,e),t}(w),P=function(e){function t(e,r,n){var i;for(var o in p(this,t),(i=u(this,c(t).call(this,e)))._httpHeaders={},e.httpHeaders){var s=e.httpHeaders[o];void 0!==s&&(i._httpHeaders[o]=s)}i._httpHeaders.Range="bytes=".concat(r,"-").concat(n-1);var l=function(e){if(404!==e.statusCode)i._setReadableStream(e);else{var t=new a.MissingPDFException('Missing PDF "'.concat(i._url,'".'));i._storedError=t}};return i._request=null,"http:"===i._url.protocol?i._request=y.request(x(i._url,i._httpHeaders),l):i._request=b.request(x(i._url,i._httpHeaders),l),i._request.on("error",(function(e){i._storedError=e})),i._request.end(),i}return l(t,e),t}(k),R=function(e){function t(e){var r;p(this,t),r=u(this,c(t).call(this,e));var n=decodeURIComponent(r._url.path);return A.test(r._url.href)&&(n=n.replace(/^\//,"")),m.lstat(n,(function(e,t){if(e)return"ENOENT"===e.code&&(e=new a.MissingPDFException('Missing PDF "'.concat(n,'".'))),r._storedError=e,void r._headersCapability.reject(e);r._contentLength=t.size,r._setReadableStream(m.createReadStream(n)),r._headersCapability.resolve()})),r}return l(t,e),t}(w),T=function(e){function t(e,r,n){var i;p(this,t),i=u(this,c(t).call(this,e));var a=decodeURIComponent(i._url.path);return A.test(i._url.href)&&(a=a.replace(/^\//,"")),i._setReadableStream(m.createReadStream(a,{start:r,end:n-1})),i}return l(t,e),t}(k)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createResponseStatusError=function(e,t){if(404===e||0===e&&/^file:/.test(t))return new n.MissingPDFException('Missing PDF "'+t+'".');return new n.UnexpectedResponseException("Unexpected server response ("+e+') while retrieving PDF "'+t+'".',e)},t.extractFilenameFromHeader=function(e){var t=e("Content-Disposition");if(t){var r=(0,i.getFilenameFromContentDispositionHeader)(t);if(r.includes("%"))try{r=decodeURIComponent(r)}catch(e){}if(/\.pdf$/i.test(r))return r}return null},t.validateRangeRequestCapabilities=function(e){var t=e.getResponseHeader,r=e.isHttp,i=e.rangeChunkSize,a=e.disableRange;(0,n.assert)(i>0,"Range chunk size must be larger than zero");var o={allowRangeRequests:!1,suggestedLength:void 0},s=parseInt(t("Content-Length"),10);if(!Number.isInteger(s))return o;if(o.suggestedLength=s,s<=2*i)return o;if(a||!r)return o;if("bytes"!==t("Accept-Ranges"))return o;if("identity"!==(t("Content-Encoding")||"identity"))return o;return o.allowRangeRequests=!0,o},t.validateResponseStatus=function(e){return 200===e||206===e};var n=r(1),i=r(199)},function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.getFilenameFromContentDispositionHeader=function(e){var t=!0,r=o("filename\\*","i").exec(e);if(r){var i=c(r=r[1]);return u(i=h(i=l(i=unescape(i))))}if(r=function(e){var t,r=[],i=o("filename\\*((?!0\\d)\\d+)(\\*?)","ig");for(;null!==(t=i.exec(e));){var a=n(t,4),s=a[1],u=a[2],h=a[3];if((s=parseInt(s,10))in r){if(0===s)break}else r[s]=[u,h]}var f=[];for(s=0;s<r.length&&s in r;++s){var d=n(r[s],2);u=d[0];h=c(h=d[1]),u&&(h=unescape(h),0===s&&(h=l(h))),f.push(h)}return f.join("")}(e)){return u(h(r))}if(r=o("filename","i").exec(e)){var a=c(r=r[1]);return u(a=h(a))}function o(e,t){return new RegExp("(?:^|;)\\s*"+e+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)}function s(e,r){if(e){if(!/^[\x00-\xFF]+$/.test(r))return r;try{var n=new TextDecoder(e,{fatal:!0}),i=Array.from(r,(function(e){return 255&e.charCodeAt(0)}));r=n.decode(new Uint8Array(i)),t=!1}catch(n){if(/^utf-?8$/i.test(e))try{r=decodeURIComponent(escape(r)),t=!1}catch(e){}}}return r}function u(e){return t&&/[\x80-\xff]/.test(e)&&(e=s("utf-8",e),t&&(e=s("iso-8859-1",e))),e}function c(e){if(e.startsWith('"')){for(var t=e.slice(1).split('\\"'),r=0;r<t.length;++r){var n=t[r].indexOf('"');-1!==n&&(t[r]=t[r].slice(0,n),t.length=r+1),t[r]=t[r].replace(/\\(.)/g,"$1")}e=t.join('"')}return e}function l(e){var t=e.indexOf("'");return-1===t?e:s(e.slice(0,t),e.slice(t+1).replace(/^[^']*'/,""))}function h(e){return!e.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(e)?e:e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(e,t,r,n){if("q"===r||"Q"===r)return s(t,n=(n=n.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(e,t){return String.fromCharCode(parseInt(t,16))})));try{n=atob(n)}catch(e){}return s(t,n)}))}return""}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFNetworkStream=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1),o=r(198);function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(t,r){c(this,e),this.url=t,r=r||{},this.isHttp=/^https?:/i.test(t),this.httpHeaders=this.isHttp&&r.httpHeaders||{},this.withCredentials=r.withCredentials||!1,this.getXhr=r.getXhr||function(){return new XMLHttpRequest},this.currXhrId=0,this.pendingRequests=Object.create(null)}return h(e,[{key:"requestRange",value:function(e,t,r){var n={begin:e,end:t};for(var i in r)n[i]=r[i];return this.request(n)}},{key:"requestFull",value:function(e){return this.request(e)}},{key:"request",value:function(e){var t=this.getXhr(),r=this.currXhrId++,n=this.pendingRequests[r]={xhr:t};for(var i in t.open("GET",this.url),t.withCredentials=this.withCredentials,this.httpHeaders){var a=this.httpHeaders[i];void 0!==a&&t.setRequestHeader(i,a)}return this.isHttp&&"begin"in e&&"end"in e?(t.setRequestHeader("Range","bytes=".concat(e.begin,"-").concat(e.end-1)),n.expectedStatus=206):n.expectedStatus=200,t.responseType="arraybuffer",e.onError&&(t.onerror=function(r){e.onError(t.status)}),t.onreadystatechange=this.onStateChange.bind(this,r),t.onprogress=this.onProgress.bind(this,r),n.onHeadersReceived=e.onHeadersReceived,n.onDone=e.onDone,n.onError=e.onError,n.onProgress=e.onProgress,t.send(null),r}},{key:"onProgress",value:function(e,t){var r=this.pendingRequests[e];r&&r.onProgress&&r.onProgress(t)}},{key:"onStateChange",value:function(e,t){var r=this.pendingRequests[e];if(r){var n=r.xhr;if(n.readyState>=2&&r.onHeadersReceived&&(r.onHeadersReceived(),delete r.onHeadersReceived),4===n.readyState&&e in this.pendingRequests)if(delete this.pendingRequests[e],0===n.status&&this.isHttp)r.onError&&r.onError(n.status);else{var i=n.status||200;if(200===i&&206===r.expectedStatus||i===r.expectedStatus){var o=function(e){var t=e.response;return"string"!=typeof t?t:(0,a.stringToBytes)(t).buffer}(n);if(206===i){var s=n.getResponseHeader("Content-Range"),u=/bytes (\d+)-(\d+)\/(\d+)/.exec(s);r.onDone({begin:parseInt(u[1],10),chunk:o})}else o?r.onDone({begin:0,chunk:o}):r.onError&&r.onError(n.status)}else r.onError&&r.onError(n.status)}}}},{key:"hasPendingRequests",value:function(){for(var e in this.pendingRequests)return!0;return!1}},{key:"getRequestXhr",value:function(e){return this.pendingRequests[e].xhr}},{key:"isPendingRequest",value:function(e){return e in this.pendingRequests}},{key:"abortAllRequests",value:function(){for(var e in this.pendingRequests)this.abortRequest(0|e)}},{key:"abortRequest",value:function(e){var t=this.pendingRequests[e].xhr;delete this.pendingRequests[e],t.abort()}}]),e}(),d=function(){function e(t){c(this,e),this._source=t,this._manager=new f(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials}),this._rangeChunkSize=t.rangeChunkSize,this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"_onRangeRequestReaderClosed",value:function(e){var t=this._rangeRequestReaders.indexOf(e);t>=0&&this._rangeRequestReaders.splice(t,1)}},{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=new p(this._manager,this._source),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){var r=new v(this._manager,e,t);return r.onClosed=this._onRangeRequestReaderClosed.bind(this),this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}}]),e}();t.PDFNetworkStream=d;var p=function(){function e(t,r){c(this,e),this._manager=t;var n={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=r.url,this._fullRequestId=t.requestFull(n),this._headersReceivedCapability=(0,a.createPromiseCapability)(),this._disableRange=r.disableRange||!1,this._contentLength=r.length,this._rangeChunkSize=r.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),this._isStreamingSupported=!1,this._isRangeSupported=!1,this._cachedChunks=[],this._requests=[],this._done=!1,this._storedError=void 0,this._filename=null,this.onProgress=null}var t;return h(e,[{key:"_onHeadersReceived",value:function(){var e=this._fullRequestId,t=this._manager.getRequestXhr(e),r=function(e){return t.getResponseHeader(e)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:r,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),i=n.allowRangeRequests,a=n.suggestedLength;i&&(this._isRangeSupported=!0),this._contentLength=a||this._contentLength,this._filename=(0,o.extractFilenameFromHeader)(r),this._isRangeSupported&&this._manager.abortRequest(e),this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function(e){e&&(this._requests.length>0?this._requests.shift().resolve({value:e.chunk,done:!1}):this._cachedChunks.push(e.chunk));this._done=!0,this._cachedChunks.length>0||(this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[])}},{key:"_onError",value:function(e){var t=this._url,r=(0,o.createResponseStatusError)(e,t);this._storedError=r,this._headersReceivedCapability.reject(r),this._requests.forEach((function(e){e.reject(r)})),this._requests=[],this._cachedChunks=[]}},{key:"_onProgress",value:function(e){this.onProgress&&this.onProgress({loaded:e.loaded,total:e.lengthComputable?e.total:this._contentLength})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._storedError){e.next=2;break}throw this._storedError;case 2:if(!(this._cachedChunks.length>0)){e.next=5;break}return t=this._cachedChunks.shift(),e.abrupt("return",{value:t,done:!1});case 5:if(!this._done){e.next=7;break}return e.abrupt("return",{value:void 0,done:!0});case 7:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise);case 10:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._headersReceivedCapability.reject(e),this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId),this._fullRequestReader=null}},{key:"filename",get:function(){return this._filename}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}},{key:"contentLength",get:function(){return this._contentLength}},{key:"headersReady",get:function(){return this._headersReceivedCapability.promise}}]),e}(),v=function(){function e(t,r,n){c(this,e),this._manager=t;var i={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)};this._requestId=t.requestRange(r,n,i),this._requests=[],this._queuedChunk=null,this._done=!1,this.onProgress=null,this.onClosed=null}var t;return h(e,[{key:"_close",value:function(){this.onClosed&&this.onClosed(this)}},{key:"_onDone",value:function(e){var t=e.chunk;this._requests.length>0?this._requests.shift().resolve({value:t,done:!1}):this._queuedChunk=t;this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._close()}},{key:"_onProgress",value:function(e){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:e.loaded})}},{key:"read",value:(t=u(i.default.mark((function e(){var t,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===this._queuedChunk){e.next=4;break}return t=this._queuedChunk,this._queuedChunk=null,e.abrupt("return",{value:t,done:!1});case 4:if(!this._done){e.next=6;break}return e.abrupt("return",{value:void 0,done:!0});case 6:return r=(0,a.createPromiseCapability)(),this._requests.push(r),e.abrupt("return",r.promise);case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._done=!0,this._requests.forEach((function(e){e.resolve({value:void 0,done:!0})})),this._requests=[],this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId),this._close()}},{key:"isStreamingSupported",get:function(){return!1}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PDFFetchStream=void 0;var n,i=(n=r(180))&&n.__esModule?n:{default:n},a=r(1),o=r(198);function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}function f(e,t,r){return{method:"GET",headers:e,signal:r&&r.signal,mode:"cors",credentials:t?"include":"same-origin",redirect:"follow"}}var d=function(){function e(t){c(this,e),this.source=t,this.isHttp=/^https?:/i.test(t.url),this.httpHeaders=this.isHttp&&t.httpHeaders||{},this._fullRequestReader=null,this._rangeRequestReaders=[]}return h(e,[{key:"getFullReader",value:function(){return(0,a.assert)(!this._fullRequestReader),this._fullRequestReader=new p(this),this._fullRequestReader}},{key:"getRangeReader",value:function(e,t){if(t<=this._progressiveDataLength)return null;var r=new v(this,e,t);return this._rangeRequestReaders.push(r),r}},{key:"cancelAllRequests",value:function(e){this._fullRequestReader&&this._fullRequestReader.cancel(e),this._rangeRequestReaders.slice(0).forEach((function(t){t.cancel(e)}))}},{key:"_progressiveDataLength",get:function(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]),e}();t.PDFFetchStream=d;var p=function(){function e(t){var r=this;c(this,e),this._stream=t,this._reader=null,this._loaded=0,this._filename=null;var n=t.source;for(var i in this._withCredentials=n.withCredentials||!1,this._contentLength=n.length,this._headersCapability=(0,a.createPromiseCapability)(),this._disableRange=n.disableRange||!1,this._rangeChunkSize=n.rangeChunkSize,this._rangeChunkSize||this._disableRange||(this._disableRange=!0),"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._isStreamingSupported=!n.disableStream,this._isRangeSupported=!n.disableRange,this._headers=new Headers,this._stream.httpHeaders){var s=this._stream.httpHeaders[i];void 0!==s&&this._headers.append(i,s)}var u=n.url;fetch(u,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,u);r._reader=e.body.getReader(),r._headersCapability.resolve();var t=function(t){return e.headers.get(t)},n=(0,o.validateRangeRequestCapabilities)({getResponseHeader:t,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),i=n.allowRangeRequests,s=n.suggestedLength;r._isRangeSupported=i,r._contentLength=s||r._contentLength,r._filename=(0,o.extractFilenameFromHeader)(t),!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new a.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject),this.onProgress=null}var t;return h(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._headersCapability.promise;case 2:return e.next=4,this._reader.read();case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9;break}return e.abrupt("return",{value:r,done:n});case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1});case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function(){return this._headersCapability.promise}},{key:"filename",get:function(){return this._filename}},{key:"contentLength",get:function(){return this._contentLength}},{key:"isRangeSupported",get:function(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}(),v=function(){function e(t,r,n){var i=this;c(this,e),this._stream=t,this._reader=null,this._loaded=0;var s=t.source;for(var u in this._withCredentials=s.withCredentials||!1,this._readCapability=(0,a.createPromiseCapability)(),this._isStreamingSupported=!s.disableStream,"undefined"!=typeof AbortController&&(this._abortController=new AbortController),this._headers=new Headers,this._stream.httpHeaders){var l=this._stream.httpHeaders[u];void 0!==l&&this._headers.append(u,l)}this._headers.append("Range","bytes=".concat(r,"-").concat(n-1));var h=s.url;fetch(h,f(this._headers,this._withCredentials,this._abortController)).then((function(e){if(!(0,o.validateResponseStatus)(e.status))throw(0,o.createResponseStatusError)(e.status,h);i._readCapability.resolve(),i._reader=e.body.getReader()})),this.onProgress=null}var t;return h(e,[{key:"read",value:(t=u(i.default.mark((function e(){var t,r,n,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._readCapability.promise;case 2:return e.next=4,this._reader.read();case 4:if(t=e.sent,r=t.value,!(n=t.done)){e.next=9;break}return e.abrupt("return",{value:r,done:n});case 9:return this._loaded+=r.byteLength,this.onProgress&&this.onProgress({loaded:this._loaded}),a=new Uint8Array(r).buffer,e.abrupt("return",{value:a,done:!1});case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"cancel",value:function(e){this._reader&&this._reader.cancel(e),this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function(){return this._isStreamingSupported}}]),e}()}])}));
;

$node[ "pdfjs-dist/build/pdf.min" ] = $node[ "pdfjs-dist/build/pdf.min.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    $.$lib_pdfjs = require('pdfjs-dist/build/pdf.min.js');
    $.$lib_pdfjs.GlobalWorkerOptions.workerSrc = '-/node_modules/pdfjs-dist/build/pdf.worker.min.js';
})($ || ($ = {}));
//pdfjs.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_range_in(source) {
        return new $mol_range_lazy(source);
    }
    $.$mol_range_in = $mol_range_in;
    class $mol_range_common {
        item(id) {
            return;
        }
        get length() {
            return 0;
        }
        get '0'() {
            throw new Error('Direct access to items not supported. Use item( id : number ) method instead.');
        }
        forEach(handle) {
            const length = this.length;
            for (let i = 0; i < length; ++i) {
                handle(this.item(i), i);
            }
        }
        valueOf() {
            const list = [];
            this.forEach(val => list.push(val));
            return list;
        }
        concat(...args) {
            const ranges = args.map(range => range.valueOf());
            return this.valueOf().concat(...ranges);
        }
        slice(start = 0, end) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return source.item(id + start);
                },
                get length() {
                    return Math.min(end, source.length) - start;
                }
            });
        }
        map(proceed) {
            const source = this;
            return new $mol_range_lazy({
                item(id) {
                    return proceed(source.item(id), id);
                },
                get length() {
                    return source.length;
                }
            });
        }
        join(delim = ',') {
            const list = [];
            this.forEach(val => list.push(val));
            return list.join(delim);
        }
        every(check) {
            let res = true;
            this.forEach((val, id) => {
                if (!res)
                    return;
                res = check(val, id);
            });
            return res;
        }
        some(check) {
            let res = false;
            this.forEach((val, id) => {
                if (res)
                    return;
                res = check(val, id);
            });
            return res;
        }
    }
    $.$mol_range_common = $mol_range_common;
    class $mol_range_lazy extends $mol_range_common {
        constructor(source = {
            item(id) { return undefined; },
            length: 0
        }) {
            super();
            this.source = source;
        }
        item(id) {
            return this.source.item(id);
        }
        get length() {
            return this.source.length;
        }
    }
    $.$mol_range_lazy = $mol_range_lazy;
})($ || ($ = {}));
//range.js.map
;
"use strict";
var $;
(function ($) {
    console.warn('$mol_atom_wait is deprecated. Use $mol_fiber_sync instead.');
    class $mol_atom_wait extends Promise {
        constructor(message = 'Wait...') {
            super(() => { });
            this.message = message;
        }
    }
    $.$mol_atom_wait = $mol_atom_wait;
    $mol_atom_wait.prototype.constructor = Promise;
})($ || ($ = {}));
//wait.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_embed_pdf extends $.$mol_scroll {
        uri() {
            return "";
        }
        sub() {
            return [this.Pages()];
        }
        Pages() {
            return ((obj) => {
                obj.rows = () => this.pages();
                return obj;
            })(new this.$.$mol_list());
        }
        pages() {
            return [];
        }
        Page(index) {
            return ((obj) => {
                obj.page = () => this.page(index);
                return obj;
            })(new this.$.$mol_embed_pdf_page());
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf.prototype, "Pages", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_embed_pdf.prototype, "Page", null);
    $.$mol_embed_pdf = $mol_embed_pdf;
})($ || ($ = {}));
(function ($) {
    class $mol_embed_pdf_page extends $.$mol_view {
        dom_name() {
            return "canvas";
        }
        page() {
            return null;
        }
        max_width() {
            return 640;
        }
        scale_over() {
            return 1.25;
        }
        plugins() {
            return [this.Touch()];
        }
        Touch() {
            return ((obj) => {
                obj.zoom = (val) => this.scale(val);
                return obj;
            })(new this.$.$mol_touch());
        }
        scale(val, force) {
            return (val !== void 0) ? val : 1;
        }
        style() {
            return ({
                "zoom": this.zoom(),
            });
        }
        zoom() {
            return 0.8;
        }
        field() {
            return ({
                "width": this.width(),
                "height": this.height(),
            });
        }
        width() {
            return 0;
        }
        height() {
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf_page.prototype, "Touch", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed_pdf_page.prototype, "scale", null);
    $.$mol_embed_pdf_page = $mol_embed_pdf_page;
})($ || ($ = {}));
//pdf.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed_pdf extends $.$mol_embed_pdf {
            document(doc, force) {
                return $.$mol_fiber_sync(() => $.$lib_pdfjs.getDocument(this.uri()).promise)();
            }
            page(index, page, force) {
                return $.$mol_fiber_sync(() => this.document().getPage(index + 1))();
            }
            pages() {
                return $.$mol_range_in({
                    item: index => this.Page(index),
                    length: this.document().numPages,
                }).valueOf();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_embed_pdf.prototype, "document", null);
        __decorate([
            $.$mol_mem_key
        ], $mol_embed_pdf.prototype, "page", null);
        $$.$mol_embed_pdf = $mol_embed_pdf;
        class $mol_embed_pdf_page extends $.$mol_embed_pdf_page {
            viewport() {
                return this.page().getViewport(this.scale_over());
            }
            zoom() {
                return this.scale() / this.scale_over();
            }
            width() {
                return Math.floor(this.viewport().width);
            }
            height() {
                return Math.floor(this.viewport().height);
            }
            minimal_width() {
                return this.width() * this.zoom();
            }
            minimal_height() {
                return this.height() * this.zoom();
            }
            paint(next, force) {
                this.page().render({
                    canvasContext: this.dom_node().getContext('2d'),
                    viewport: this.viewport(),
                })
                    .then(() => this.paint(null, $.$mol_mem_force_cache))
                    .catch((error) => this.paint(error, $.$mol_mem_force_cache));
                throw new $.$mol_atom_wait('Painting...');
            }
            render() {
                super.render();
                this.paint();
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_embed_pdf_page.prototype, "paint", null);
        $$.$mol_embed_pdf_page = $mol_embed_pdf_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//pdf.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/embed/pdf/pdf.view.css", "[mol_embed_pdf] {\r\n\twidth: 100%;\n\theight: 100%;\n}\n\n[mol_embed_pdf_pages] {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: .5rem;\n}\n\n[mol_embed_pdf_page] {\n\tdisplay: block;\n\tmargin: .5rem auto;\n\timage-rendering: auto;\n\tbox-shadow: var(--mol_skin_light_outline);\n}\n");
})($ || ($ = {}));
//pdf.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_embed_native extends $.$mol_view {
        dom_name() {
            return "object";
        }
        attr() {
            return (Object.assign(Object.assign({}, super.attr()), { "data": this.uri(), "type": this.mime() }));
        }
        uri() {
            return "";
        }
        mime() {
            return "";
        }
        sub() {
            return [this.Open()];
        }
        Open() {
            return ((obj) => {
                obj.uri = () => this.uri();
                obj.sub = () => [this.Open_button()];
                return obj;
            })(new this.$.$mol_link());
        }
        Open_button() {
            return ((obj) => {
                obj.title = () => this.open_label();
                return obj;
            })(new this.$.$mol_button_major());
        }
        open_label() {
            return this.$.$mol_locale.text("$mol_embed_native_open_label");
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "Open", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed_native.prototype, "Open_button", null);
    $.$mol_embed_native = $mol_embed_native;
})($ || ($ = {}));
//native.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/embed/native/native.view.css", "[mol_embed_native] {\n\tmin-width: 100%;\n\tmin-height: 100%;\n\tmax-width: 100vw;\n\tmax-height: 100vh;\n\tobject-fit: scale-down;\n\tdisplay: flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n}\n");
})($ || ($ = {}));
//native.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_embed extends $.$mol_ghost {
        Pdf() {
            return ((obj) => {
                obj.uri = () => this.uri();
                return obj;
            })(new this.$.$mol_embed_pdf());
        }
        uri() {
            return "";
        }
        Native() {
            return ((obj) => {
                obj.uri = () => this.uri();
                obj.mime = () => this.mime();
                return obj;
            })(new this.$.$mol_embed_native());
        }
        mime() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_embed.prototype, "Pdf", null);
    __decorate([
        $.$mol_mem
    ], $mol_embed.prototype, "Native", null);
    $.$mol_embed = $mol_embed;
})($ || ($ = {}));
//embed.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_embed extends $.$mol_embed {
            Sub() {
                if (this.mime() === 'application/pdf') {
                    return this.Pdf();
                }
                return this.Native();
            }
        }
        $$.$mol_embed = $mol_embed;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//embed.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/embed/embed.view.css", "[mol_embed] {\n\tmin-width: 100%;\n\tmin-height: 100%;\n\tmax-width: 100vw;\n\tmax-height: 100vh;\n\tdisplay: flex;\n\talign-items: stretch;\n\tjustify-content: stretch;\n}\n");
})($ || ($ = {}));
//embed.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $hyoo_webdav extends $.$mol_book {
        uri_current() {
            return this.uri_root();
        }
        uri_root() {
            return this.uri_root_default();
        }
        uri_root_default() {
            return "http://ajaxexplorer.com/User5df12c6/";
        }
        credentials() {
            return ({
                "login": "",
                "password": "",
            });
        }
        title() {
            return this.title_root();
        }
        title_root() {
            return this.$.$mol_locale.text("$hyoo_webdav_title_root");
        }
        Folder(folder) {
            return ((obj) => {
                obj.title = () => this.webdav_title(folder);
                obj.description = () => this.webdav_description(folder);
                obj.tools = () => this.page_tools(folder);
                obj.rows = () => this.folder_rows(folder);
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$hyoo_webdav_folder());
        }
        webdav_title(folder) {
            return "";
        }
        webdav_description(folder) {
            return "";
        }
        folder_rows(folder) {
            return [];
        }
        Folder_row(uri) {
            return ((obj) => {
                obj.minimal_height = () => 40;
                obj.arg = () => this.folder_row_arg(uri);
                obj.current = () => this.folder_row_current(uri);
                obj.sub = () => [this.folder_row_icon(uri), this.Folder_row_info(uri)];
                return obj;
            })(new this.$.$mol_link());
        }
        folder_row_arg(uri) {
            return ({});
        }
        folder_row_current(uri) {
            return false;
        }
        folder_row_icon(uri) {
            return null;
        }
        Folder_row_info(uri) {
            return ((obj) => {
                obj.sub = () => [this.Folder_row_descr(uri), this.Folder_row_title(uri)];
                return obj;
            })(new this.$.$mol_view());
        }
        Folder_row_descr(uri) {
            return ((obj) => {
                obj.sub = () => [this.folder_row_descr(uri)];
                return obj;
            })(new this.$.$mol_view());
        }
        folder_row_descr(uri) {
            return "";
        }
        Folder_row_title(uri) {
            return ((obj) => {
                obj.sub = () => [this.folder_row_title(uri)];
                return obj;
            })(new this.$.$mol_view());
        }
        folder_row_title(uri) {
            return "";
        }
        File(file) {
            return ((obj) => {
                obj.title = () => this.webdav_title(file);
                obj.tools = () => this.page_tools(file);
                obj.src = () => this.file_uri(file);
                obj.mime = () => this.file_mime(file);
                obj.event_top = (val) => this.event_front_up(val);
                return obj;
            })(new this.$.$hyoo_webdav_file());
        }
        file_uri(file) {
            return "";
        }
        file_mime(file) {
            return "";
        }
        Icon_folder(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_folder());
        }
        Icon_file(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_file());
        }
        Placeholder() {
            return ((obj) => {
                obj.title = () => this.title();
                return obj;
            })(new this.$.$mol_book_placeholder());
        }
        tools_root() {
            return [];
        }
        page_tools(uri) {
            return [this.Close(uri)];
        }
        Close(uri) {
            return ((obj) => {
                obj.sub = () => [this.Close_icon(uri)];
                obj.arg = () => this.close_arg(uri);
                return obj;
            })(new this.$.$mol_link());
        }
        Close_icon(uri) {
            return ((obj) => {
                return obj;
            })(new this.$.$mol_icon_cross());
        }
        close_arg(uri) {
            return ({});
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Folder", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Folder_row", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Folder_row_info", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Folder_row_descr", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Folder_row_title", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "File", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Icon_folder", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Icon_file", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_webdav.prototype, "Placeholder", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Close", null);
    __decorate([
        $.$mol_mem_key
    ], $hyoo_webdav.prototype, "Close_icon", null);
    $.$hyoo_webdav = $hyoo_webdav;
})($ || ($ = {}));
(function ($) {
    class $hyoo_webdav_folder extends $.$mol_page {
        minimal_width() {
            return 400;
        }
        body() {
            return [this.Description(), this.Folder_rows()];
        }
        Description() {
            return ((obj) => {
                obj.text = () => this.description();
                return obj;
            })(new this.$.$mol_text());
        }
        description() {
            return "";
        }
        Folder_rows() {
            return ((obj) => {
                obj.rows = () => this.rows();
                return obj;
            })(new this.$.$mol_list());
        }
        rows() {
            return [];
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_webdav_folder.prototype, "Description", null);
    __decorate([
        $.$mol_mem
    ], $hyoo_webdav_folder.prototype, "Folder_rows", null);
    $.$hyoo_webdav_folder = $hyoo_webdav_folder;
})($ || ($ = {}));
(function ($) {
    class $hyoo_webdav_file extends $.$mol_page {
        minimal_width() {
            return 800;
        }
        body() {
            return [this.Embed()];
        }
        Embed() {
            return ((obj) => {
                obj.uri = () => this.src();
                obj.mime = () => this.mime();
                return obj;
            })(new this.$.$mol_embed());
        }
        src() {
            return "";
        }
        mime() {
            return "";
        }
    }
    __decorate([
        $.$mol_mem
    ], $hyoo_webdav_file.prototype, "Embed", null);
    $.$hyoo_webdav_file = $hyoo_webdav_file;
})($ || ($ = {}));
//webdav.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_webdav extends $.$hyoo_webdav {
            render() {
                $.$mol_http.resource(this.uri_root()).text();
                return super.render();
            }
            pages() {
                return this.webdavs().map((webdav) => (this.webdav_type(webdav.uri()) === 'dir')
                    ? this.Folder(webdav.uri())
                    : this.File(webdav.uri()));
            }
            uri_root(next) {
                return $.$mol_state_arg.value(this.state_key('root'), next) || this.uri_root_default();
            }
            uri_current(next) {
                return $.$mol_state_arg.value(this.state_key('current'), next) || super.uri_current();
            }
            root() {
                return $.$mol_webdav.item(this.uri_root());
            }
            current() {
                const root = this.uri_root();
                const current = this.uri_current();
                if (current.substring(0, root.length) !== root)
                    return this.root();
                return $.$mol_webdav.item(current);
            }
            webdav(uri) {
                const webdav = $.$mol_webdav.item(uri);
                webdav.credentials = () => this.credentials();
                return webdav;
            }
            folder_row_current(uri) {
                return this.webdavs().indexOf(this.webdav(uri)) !== -1;
            }
            webdavs() {
                const root = this.root();
                const current = this.current();
                const webdavs = [current];
                let webdav = current;
                while (webdav !== root) {
                    webdav = webdav.parent();
                    webdavs.unshift(webdav);
                }
                return webdavs;
            }
            webdav_type(uri) {
                const webdav = this.webdav(uri);
                if (webdav === this.root() || webdav.type() === 'dir')
                    return 'dir';
                return 'file';
            }
            webdav_title(uri) {
                const webdav = this.webdav(uri);
                if (webdav === this.root())
                    return this.title_root();
                return webdav.prop('displayname') || '';
            }
            folder_rows(uri) {
                return this.webdav(uri).sub().map(webdav => this.Folder_row(webdav.uri()));
            }
            folder_row_arg(uri) {
                return { 'current': uri };
            }
            folder_row_icon(uri) {
                return this.webdav_type(uri) === 'dir'
                    ? this.Icon_folder(uri)
                    : this.Icon_file(uri);
            }
            folder_row_title(uri) {
                return this.webdav(uri).prop('displayname');
            }
            folder_row_descr(uri) {
                if (this.webdav_type(uri) !== 'file')
                    return '';
                const size = this.file_size(uri);
                return `${size.toLocaleString()} B`;
            }
            file_uri(uri) {
                return uri;
            }
            file_mime(uri) {
                return this.webdav(uri).prop('getcontenttype');
            }
            file_size(uri) {
                return Number(this.webdav(uri).prop('getcontentlength'));
            }
            title() {
                return this.webdav_title(this.uri_current());
            }
            page_tools(uri) {
                return uri === this.uri_root()
                    ? this.tools_root()
                    : [this.Close(uri)];
            }
            close_arg(uri) {
                return { 'current': this.webdav(uri).parent().uri() };
            }
        }
        $$.$hyoo_webdav = $hyoo_webdav;
        class $hyoo_webdav_folder extends $.$hyoo_webdav_folder {
            body() {
                return [
                    ...this.description() ? [this.Description()] : [],
                    this.Folder_rows(),
                ];
            }
        }
        $$.$hyoo_webdav_folder = $hyoo_webdav_folder;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//webdav.view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("hyoo/webdav/webdav.view.css", "[hyoo_webdav_folder] {\n\tflex: 1 1 auto;\n\twidth: 400px;\n}\n\n[hyoo_webdav_folder_body] {\n\tpadding: .5rem;\n}\n\n[hyoo_webdav_folder_description] {\n\tpadding: 0;\n}\n\n[hyoo_webdav_folder_folder_rows] {\n\tmin-height: 100%;\n}\n\n[hyoo_webdav_folder_row] {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\ttext-align: left;\n\tword-break: break-word;\n\tpadding: .25rem;\n}\n\n[hyoo_webdav_folder_row_info] {\n\tdisplay: block;\n\tflex: 1 1 auto;\n}\n\n[hyoo_webdav_folder_row_title] {\n\tmargin: .25rem;\n\tdisplay: block;\n}\n\n[hyoo_webdav_folder_row_descr] {\n\topacity: .66;\n\twhite-space: nowrap;\n\tmargin: .5rem;\n\tfont-size: .8rem;\n\tfloat: right;\n}\n\n[hyoo_webdav_file] {\n\tflex: 1000 1 auto;\n\twidth: 800px;\n\talign-self: stretch;\n}\n\n[hyoo_webdav_file_embed] {\n\talign-self: stretch;\n\tflex: 1 1 auto;\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tborder-radius: var(--mol_skin_round);\n}\n\n[hyoo_webdav_file_body] {\n\toverflow: hidden;\n}\n\n[hyoo_webdav_icon_file] ,\n[hyoo_webdav_icon_folder] {\n\tmargin: .25rem;\n\tzoom: 1.5;\n\topacity: .66;\n}\n");
})($ || ($ = {}));
//webdav.view.css.js.map
;
export default $
//# sourceMappingURL=web.esm.js.map
