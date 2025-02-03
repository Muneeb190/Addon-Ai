< !doctype html >
    <
    html lang = "en"
class = "scroll-smooth" >
    <
    head >
    <
    meta charset = "utf-8" / >
    <
    title > DanteGPU < /title> <
    link
rel = "icon"
type = "image/png"
sizes = "32x32"
href = "./images/dpu-logo.png" /
    >

    <
    meta name = "viewport"
content = "width=device-width,initial-scale=1" / >
    <
    link href = "./css/vendors/aos.css"
rel = "stylesheet" / >
    <
    link rel = "stylesheet"
href = "./css/vendors/swiper-bundle.min.css" / >
    <
    link href = "./style.css?v=4"
rel = "stylesheet" / >
    <
    style >
    /* Modal background */
    .modal {
        display: none;
        position: fixed;
        z - index: 1;
        left: 0;
        top: 0;
        width: 100 % ;
        height: 100 % ;
        overflow: auto;
        background - color: rgba(0, 0, 0, 0.4);
    }

    /* Modal content */
    .modal - content {
        background - color: black;
        margin: 5 % auto;
        /* Üst marjini azalttık */
        padding: 30 px;
        border: 1 px solid #888;
        width: 700px;
        /* Genişliği biraz azalttık */
        height: 1200px;
        min-height: 80vh;
        /* Minimum yükseklik ekledik */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      /* Close button */
      .close {
        color: # aaa;
        align - self: flex - end;
        /* Sağ üst köşeye yerleştirdik */
        font - size: 28 px;
        font - weight: bold;
        cursor: pointer;
    }

    .close: hover,
    .close: focus {
        color: white;
        /* Siyah arka plan üzerinde daha iyi görünür */
        text - decoration: none;
    }

    .modal - iframe {
        height: 100 % ;
    } <
    /style> <
    /head>

    <
    body
class = "font-inter antialiased bg-slate-900 text-slate-100 tracking-tight" >
    <
    script src = "scripts.js" > < /script>
    <!-- Page wrapper -->
    <
    div
class = "flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip" >
    <!-- Site header -->
    <
    header class = "absolute w-full z-30" >
    <
    div class = "max-w-6xl mx-auto px-4 sm:px-6" >
    <
    div class = "flex items-center justify-between h-16 md:h-20" >
    <!-- Site branding -->
    <
    div class = "flex-1" >
    <!-- Logo -->
    <
    a class = "inline-flex"
href = ""
aria - label = " Cruip" >
    <
    img
class = "max-w-none"
src = "./images/dpu-logo.png"
width = "30"
height = "30"
alt = "Stellar" /
    >
    <
    /a> <
    /div>

    <!-- Desktop navigation -->
    <
    nav class = "hidden md:flex md:grow navbar-text" >
    <!-- Desktop menu links -->
    <
    ul class = "flex grow justify-end flex-wrap items-center" >
    <
    li >
    <
    a
class = "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
href = "#how" >
    How It Works < /a >
    <
    /li> <
    li >
    <
    a
class = "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
href = "#technologies" >
    Technologies < /a >
    <
    /li> <
    li >
    <
    a
class = "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
href = "#opos" >
    OPOS < /a >
    <
    /li> <
    li >
    <
    a
class = "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
href = "#team" >
    Team < /a >
    <
    /li> <
    li >
    <
    a
class = "font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
href = "#contact" >
    Contact < /a >
    <
    /li> <
    /ul> <
    /nav>

    <!-- Mobile menu -->
    <
    div
class = "md:hidden flex items-center ml-4"
x - data = "{ expanded: false }" >
    <
    div
class = "hamburger-menu"
@click.stop = "expanded = !expanded"
aria - controls = "mobile-nav": aria - expanded = "expanded" >
    <
    input
type = "checkbox"
id = "menu-checkbox"
class = "menu-checkbox": checked = "expanded" /
    >
    <
    div class = "menu-lines" >
    <
    span > < /span> <
    span > < /span> <
    span > < /span> <
    /div> <
    /div>

    <!-- Mobile navigation -->
    <
    nav
id = "mobile-nav"
class = "absolute top-full z-20 right-0 max-w-[280px] px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
x - ref = "mobileNav": style = "expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'"
@click.outside = "expanded = false"
@keydown.escape.window = "expanded = false"
x - cloak >
    <
    ul
class = "border border-slate-800 rounded-lg px-4 py-4 my-4 bg-slate-900" >
    <
    li >
    <
    a
class = "flex font-medium text-sm text-slate-300 hover:text-white py-2"
href = "#how" >
    How It Works < /a >
    <
    /li> <
    li >
    <
    a
class = "flex font-medium text-sm text-slate-300 hover:text-white py-2"
href = "#technologies" >
    Technologies < /a >
    <
    /li> <
    li >
    <
    a
class = "flex font-medium text-sm text-slate-300 hover:text-white py-2"
href = "#opos" >
    OPOS < /a >
    <
    /li> <
    li >
    <
    a
class = "flex font-medium text-sm text-slate-300 hover:text-white py-2"
href = "#team" >
    Team < /a >
    <
    /li> <
    li >
    <
    a
class = "flex font-medium text-sm text-slate-300 hover:text-white py-2"
href = "#contact" >
    Contact < /a >
    <
    /li> <
    /ul> <
    /nav> <
    /div> <
    /div> <
    /div> <
    /header>

    <!-- Page content -->
    <
    main class = "grow" >
    <!-- Hero -->
    <
    section id = "main" >
    <
    div class = "relative max-w-6xl mx-auto px-4 sm:px-6" >
    <!-- Particles animation -->
    <
    div class = "absolute inset-0 -z-10"
aria - hidden = "true" >
    <
    canvas data - particle - animation > < /canvas> <
    /div>

    <!-- Illustration -->
    <
    div
class = "absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden"
aria - hidden = "true" >
    <
    div class = "absolute left-1/2 -translate-x-1/2 bottom-0 -z-10" >
    <
    img
src = "./images/glow-bottom.svg"
class = "max-w-none"
width = "2146"
height = "774"
alt = "Hero Illustration" /
    >
    <
    /div> <
    /div>

    <
    div class = "pt-32 pb-16 md:pt-52 md:pb-32" >
    <!-- Hero content -->
    <
    div class = "max-w-3xl mx-auto text-center" >
    <
    div class = "mb-6"
data - aos = "fade-down" >
    <
    div
class = "inline-flex font-medium2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3"
style = "font-size: clamp(2rem, 6vw, 3.5rem)" >
    DanteGPU <
    /div> <
    h1
class = "h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4"
data - aos = "fade-down" >
    NEW ERA OF GPU & AI AGENT RENTING <
    /h1> <
    p
class = "text-lg text-slate-300 mb-8"
data - aos = "fade-down"
data - aos - delay = "200" >
    DanteGPU is a decentralized platform enabling AI agents to
efficiently utilize distributed GPU resources through Solana
blockchain infrastructure. <
    /p> <
    div
class = "max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
data - aos = "fade-down"
data - aos - delay = "400"
style = "margin-top: 40px" >
    <
    div >
    <
    a
class = "btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
href = "https://raydium.io/swap/?inputMint=So11111111111111111111111111111111111111112&outputMint=7xUV6YR3rZMfExPqZiovQSUxpnHxr2KJJqFg1bFrpump" >
    Raydium < span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
<
/a> <
/div> <
div >
    <
    a
class = "btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
href = "https://pump.fun/coin/7xUV6YR3rZMfExPqZiovQSUxpnHxr2KJJqFg1bFrpump" >
    Pump.fun < span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
<
/a> <
/div> <
/div> <
div class = "mb-6"
data - aos = "fade-down" >
    <
    div
class = "inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md" >
    < /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section>

    <
    section id = "how" >
    <
    div class = "max-w-6xl mx-auto px-4 sm:px-6" >
    <
    div class = "pt-12 md:pt-20" >
    <!-- Section header -->
    <
    div class = "max-w-3xl mx-auto text-center pb-12 md:pb-20" >
    <
    div >
    <
    div
class = "inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3" >
    Easy to Use <
    /div> <
    /div> <
    h2
class = "h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" >
    How It Works <
    /h2> <
    p class = "text-lg text-slate-400" >
    DanteGPU offers a user - friendly dashboard that turns GPU
rental into a source of income
for users. <
    /p> <
    /div>

    <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
    <!-- * Initialized in src/js/main.js -->
    <!-- * Custom styles in src/css/additional-styles/theme.scss -->
    <
    div
class = "relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-emerald-950 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-emerald-950 after:to-20%" >
    <
    div class = "stellar-carousel swiper-container group" >
    <
    div class = "swiper-wrapper w-fit"
data - highlighter >
    <!-- Carousel items -->
    <
    div
class = "swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden group/slide" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <!-- Particles animation -->
    <
    div
class = "absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "3" >
    < /canvas> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" >
    < /div> <
    /div> <
    div class = "flex flex-col p-6 h-full" >
    <
    img
class = "mb-3"
src = "./images/carousel-icon-01.svg"
width = "56"
height = "56"
alt = "Icon 01" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-lg mb-1" >
    Decentralized GPU Pool Management <
    /div> <
    div class = "text-slate-400 mb-3" >
    We are planning to work with decentralized GPU / LLM
clusters like Kuzco.xyz <
    /div> <
    /div> <
    div class = "text-right" >
    <
    a
class = "text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
href = "#0" >
    Learn More <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
< /a >
<
/div> <
/div> <
/div> <
/div> <
div
class = "swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden group/slide" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <!-- Particles animation -->
    <
    div
class = "absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "3" >
    < /canvas> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" >
    < /div> <
    /div> <
    div class = "flex flex-col p-6 h-full" >
    <
    img
class = "mb-3"
src = "./images/carousel-icon-02.svg"
width = "56"
height = "56"
alt = "Icon 01" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-lg mb-1" >
    AI Agent Task Distribution <
    /div> <
    div class = "text-slate-400 mb-3" >
    AI agents create tasks on the platform, which then
get distributed to appropriate GPUs, taking
factors such as GPU capacity, cost, and location
into account. <
    /div> <
    /div> <
    div class = "text-right" >
    <
    a
class = "text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
href = "#0" >
    Learn More <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
< /a >
<
/div> <
/div> <
/div> <
/div> <
div
class = "swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden group/slide" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <!-- Particles animation -->
    <
    div
class = "absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "3" >
    < /canvas> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" >
    < /div> <
    /div> <
    div class = "flex flex-col p-6 h-full" >
    <
    img
class = "mb-3"
src = "./images/carousel-icon-03.svg"
width = "56"
height = "56"
alt = "Icon 01" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-lg mb-1" >
    Smart Contract Based Resource Allocation <
    /div> <
    div class = "text-slate-400 mb-3" >
    The platform manages the GPU pool network and
automatically matches AI agents with suitable GPUs
according to their needs. <
    /div> <
    /div> <
    div class = "text-right" >
    <
    a
class = "text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
href = "#0" >
    Learn More <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
< /a >
<
/div> <
/div> <
/div> <
/div> <
div
class = "swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden group/slide" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <!-- Particles animation -->
    <
    div
class = "absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "3" >
    < /canvas> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" >
    < /div> <
    /div> <
    div class = "flex flex-col p-6 h-full" >
    <
    img
class = "mb-3"
src = "./images/carousel-icon-04.svg"
width = "56"
height = "56"
alt = "Icon 01" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-lg mb-1" >
    Real - time Monitoring and Optimization <
    /div> <
    div class = "text-slate-400 mb-3" >
    The platform tracks task execution and GPU usage
with comprehensive monitoring systems, thus
optimizing resources and maintaining system
efficiency. <
    /div> <
    /div> <
    div class = "text-right" >
    <
    a
class = "text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
href = "#0" >
    Learn More <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
< /a >
<
/div> <
/div> <
/div> <
/div> <
div
class = "swiper-slide h-auto relative bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden group/slide" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <!-- Particles animation -->
    <
    div
class = "absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "3" >
    < /canvas> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" >
    < /div> <
    /div> <
    div class = "flex flex-col p-6 h-full" >
    <
    img
class = "mb-3"
src = "./images/carousel-icon-05.svg"
width = "56"
height = "56"
alt = "Icon 05" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-lg mb-1" >
    Secure Payment Processing <
    /div> <
    div class = "text-slate-400 mb-3" >
    Payments between AI agents and GPU providers are
securely processed over the Solana blockchain.The
system ensures transparent and automatic payments
based on GPU usage. <
    /div> <
    /div> <
    div class = "text-right" >
    <
    a
class = "text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
href = "#0" >
    Learn More <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
< /a >
<
/div> <
/div> <
/div> <
/div> <
/div> <
/div> <
/div>

<!-- Arrows -->
<
div class = "flex mt-8 justify-end" >
    <
    button
class = "carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group" >
    <
    span class = "sr-only" > Previous < /span> <
    svg
class = "w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
viewBox = "0 0 16 16"
xmlns = "http://www.w3.org/2000/svg" >
    <
    path
d = "M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" /
    >
    <
    /svg> <
    /button> <
    button
class = "carousel-next relative z-20 w-12 h-12 flex items-center justify-center group" >
    <
    span class = "sr-only" > Next < /span> <
    svg
class = "w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
viewBox = "0 0 16 16"
xmlns = "http://www.w3.org/2000/svg" >
    <
    path
d = "M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" /
    >
    <
    /svg> <
    /button> <
    /div> <
    /div> <
    /div> <
    /section> <
    section >
    <
    div class = "max-w-6xl mx-auto px-4 sm:px-6" >
    <
    div
class = "relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden" >
    <!-- Radial gradient -->

    <!-- Blurred shape -->

    <!-- Content -->
    <
    div class = "max-w-3xl mx-auto text-center" >
    <
    div >
    <
    div
class = "inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3" >
    Powered by AI Agents <
    /div> <
    /div> <
    h2
class = "h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" >
    Take control of your rent GPUs <
    /h2> <
    p class = "text-lg text-slate-400 mb-8" >
    Take your place in the marketplace with a user - friendly and
advanced dashboard
    <
    /p>

    <!-- old blink button -->
    <!-- 
    <
    div >
    <
    button
class = "btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group"
id = "openModal" >
    Blink popup <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; <
/span> <
/button> <
/div>
-->
<
div class = "mb-6"
data - aos = "fade-down" >
    <
    div
class = "inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md" >
    <
    a
class = "btn-sm py-3 px-6 text-slate-300 hover:text-white transition duration-150 ease-in-out group relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow"
href = "https://pump.fun/coin/7xUV6YR3rZMfExPqZiovQSUxpnHxr2KJJqFg1bFrpump"
id = "openModal" >
    <
    span class = "relative inline-flex items-center" >
    Donate to the Project <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
<
/span> <
/a> <
/div> <
/div> <
/div> <
/div> <
/div> <
/section>
<!-- Features -->
<
section id = "technologies" >
    <
    div class = "relative max-w-6xl mx-auto px-4 sm:px-6" >
    <!-- Illustration -->
    <
    div
class = "absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
aria - hidden = "true" >
    <
    div class = "absolute left-1/2 -translate-x-1/2 top-0 -z-10" >
    <
    img
src = "./images/glow-top.svg"
class = "max-w-none"
width = "1404"
height = "658"
alt = "Features Illustration" /
    >
    <
    /div> <
    /div>

    <
    div class = "pt-16 pb-12 md:pt-52 md:pb-20" >
    <
    div x - data = "{ tab: '1' }" >
    <!-- Section content -->
    <
    div
class = "max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0" >
    <!-- Content -->
    <
    div
class = "md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center"
data - aos = "fade-down" >
    <!-- Content #1 -->
    <
    div >
    <
    div
class = "inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3" >
    Innovative Technologies <
    /div> <
    /div> <
    h3
class = "h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3" >
    GPU Resource Management <
    /h3> <
    p class = "text-lg text-slate-400 mb-8" >
    We are planning to utilize Kuzco.xyz 's GPU clusters and
AI16Z DAO 's toolkit to enable efficient resource
allocation and advanced AI capabilities in a decentralized
environment. <
    /p> <
    div class = "mt-8 max-w-xs max-md:mx-auto space-y-2" >
    <
    button
class = "flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100": class = "tab !== '1' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
@click.prevent = "tab = '1'" >
    <
    svg
class = "shrink-0 fill-slate-300 mr-3"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" /
    >
    <
    /svg> <
    span > Advanced AI agent task management < /span> <
    /button> <
    button
class = "flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100": class = "tab !== '2' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
@click.prevent = "tab = '2'" >
    <
    svg
class = "shrink-0 fill-slate-300 mr-3"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" /
    >
    <
    /svg> <
    span > User - friendly dashboard platform < /span> <
    /button> <
    button
class = "flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100": class = "tab !== '3' ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'"
@click.prevent = "tab = '3'" >
    <
    svg
class = "shrink-0 fill-slate-300 mr-3"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" /
    >
    <
    /svg> <
    span > Real - time GPU monitoring < /span> <
    /button> <
    /div> <
    /div>

    <!-- Image -->
    <
    div
class = "md:w-5/12 lg:w-1/2"
data - aos = "fade-up"
data - aos - delay = "100" >
    <
    div class = "relative py-24 -mt-12" >
    <!-- Particles animation -->
    <
    div class = "absolute inset-0 -z-10" >
    <
    canvas
data - particle - animation
data - particle - quantity = "8"
data - particle - staticity = "30" >
    < /canvas> <
    /div>

    <
    div class = "flex items-center justify-center" >
    <
    div
class = "relative w-48 h-48 flex justify-center items-center" >
    <!-- Halo effect -->
    <
    svg
class = "absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md"
width = "480"
height = "480"
viewBox = "0 0 480 480"
xmlns = "http://www.w3.org/2000/svg" >
    <
    defs >
    <
    linearGradient
id = "pulse-a"
x1 = "50%"
x2 = "50%"
y1 = "100%"
y2 = "0%" >
    <
    stop offset = "0%"
stop - color = "#A855F7" / >
    <
    stop offset = "76.382%"
stop - color = "#FAF5FF" / >
    <
    stop offset = "100%"
stop - color = "#6366F1" / >
    <
    /linearGradient> <
    /defs> <
    g fill - rule = "evenodd" >
    <
    path
class = "pulse"
fill = "url(#pulse-a)"
fill - rule = "evenodd"
d = "M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" >
    < /path> <
    path
class = "pulse pulse-1"
fill = "url(#pulse-a)"
fill - rule = "evenodd"
d = "M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" >
    < /path> <
    path
class = "pulse pulse-2"
fill = "url(#pulse-a)"
fill - rule = "evenodd"
d = "M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" >
    < /path> <
    /g> <
    /svg>
    <!-- Grid -->
    <
    div
class = "absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]" >
    <
    div class = "h-[200%] animate-endless" >
    <
    div
class = "absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" >
    < /div> <
    div
class = "absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" >
    < /div> <
    div
class = "absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" >
    < /div> <
    div
class = "absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" >
    < /div> <
    /div> <
    /div>
    <!-- Icons -->
    <
    div
x - show = "tab === '1'"
x - transition: enter = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
x - transition: enter - start = "opacity-0 -rotate-[60deg]"
x - transition: enter - end = "opacity-100 rotate-0"
x - transition: leave = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 absolute"
x - transition: leave - start = "opacity-100 rotate-0"
x - transition: leave - end = "opacity-0 rotate-[60deg]" >
    <
    div
class = "relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl" >
    <
    svg
class = "relative fill-slate-200"
xmlns = "http://www.w3.org/2000/svg"
width = "23"
height = "25" >
    <
    path
fill - rule = "nonzero"
d = "M10.55 15.91H.442L14.153.826 12.856 9.91h10.107L9.253 24.991l1.297-9.082Zm.702-8.919L4.963 13.91h7.893l-.703 4.918 6.289-6.918H10.55l.702-4.918Z" /
    >
    <
    /svg> <
    /div> <
    /div> <
    div
x - show = "tab === '2'"
x - transition: enter = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
x - transition: enter - start = "opacity-0 -rotate-[60deg]"
x - transition: enter - end = "opacity-100 rotate-0"
x - transition: leave = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 absolute"
x - transition: leave - start = "opacity-100 rotate-0"
x - transition: leave - end = "opacity-0 rotate-[60deg]" >
    <
    div
class = "relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl" >
    <
    svg
class = "relative fill-slate-200"
xmlns = "http://www.w3.org/2000/svg"
width = "22"
height = "22" >
    <
    path
d = "M18 14h-2V8h2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v2H8V4c0-2.2-1.8-4-4-4S0 1.8 0 4s1.8 4 4 4h2v6H4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4v-2h6v2c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4ZM16 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2h-2V4ZM2 4c0-1.1.9-2 2-2s2 .9 2 2v2H4c-1.1 0-2-.9-2-2Zm4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2h2v2ZM8 8h6v6H8V8Zm10 12c-1.1 0-2-.9-2-2v-2h2c1.1 0 2 .9 2 2s-.9 2-2 2Z" /
    >
    <
    /svg> <
    /div> <
    /div> <
    div
x - show = "tab === '3'"
x - transition: enter = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
x - transition: enter - start = "opacity-0 -rotate-[60deg]"
x - transition: enter - end = "opacity-100 rotate-0"
x - transition: leave = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 absolute"
x - transition: leave - start = "opacity-100 rotate-0"
x - transition: leave - end = "opacity-0 rotate-[60deg]" >
    <
    div
class = "relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl" >
    <
    svg
class = "relative fill-slate-200"
xmlns = "http://www.w3.org/2000/svg"
width = "26"
height = "14" >
    <
    path
fill - rule = "nonzero"
d = "m10 5.414-8 8L.586 12 10 2.586l6 6 8-8L25.414 2 16 11.414z" /
    >
    <
    /svg> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section> <
    section class = "relative" >
    <
    div class = "relative max-w-6xl mx-auto px-4 sm:px-6" >
    <!-- Blurred shape -->
    <
    div
class = "absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10"
aria - hidden = "true" >
    <
    svg xmlns = "http://www.w3.org/2000/svg"
width = "434"
height = "427" >
    <
    defs >
    <
    linearGradient
id = "bs4-a"
x1 = "19.609%"
x2 = "50%"
y1 = "14.544%"
y2 = "100%" >
    <
    stop offset = "0%"
stop - color = "#A855F7" / >
    <
    stop offset = "100%"
stop - color = "#6366F1"
stop - opacity = "0" / >
    <
    /linearGradient> <
    /defs> <
    path
fill = "url(#bs4-a)"
fill - rule = "evenodd"
d = "m0 0 461 369-284 58z"
transform = "matrix(1 0 0 -1 0 427)" /
    >
    <
    /svg> <
    /div>

    <
    div class = "pt-16 pb-12 md:pt-32 md:pb-20" >
    <!-- Section header -->
    <
    div class = "max-w-3xl pb-12 md:pb-20" >
    <
    h2
class = "h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" >
    Why Trust Us ?
    <
    /h2> <
    p class = "text-lg text-slate-400" >
    Traditional GPU resource allocation systems are centralized
and often lead to inefficient resource utilization and high
costs.Users either face limited access to GPU resources or
pay premium prices through centralized providers.This creates
barriers
for AI agents needing computational power and makes
it challenging
for GPU providers to monetize their resources
efficiently. <
    /p> <
    /div>

    <!-- Rows -->
    <
    div class = "divide-y divide-slate-800" >
    <!-- Row -->
    <
    div class = "py-8 first-of-type:pt-0 last-of-type:pb-0" >
    <
    div >
    <
    div
class = "inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6" >
    API Authorization <
    /div> <
    /div> <
    div class = "grid md:grid-cols-3 gap-8 md:gap-12 mb-2" >
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M13 16c-.153 0-.306-.035-.447-.105l-3.851-1.926c-.231.02-.465.031-.702.031-4.411 0-8-3.14-8-7s3.589-7 8-7 8 3.14 8 7c0 1.723-.707 3.351-2 4.63V15a1.003 1.003 0 0 1-1 1Zm-4.108-4.054c.155 0 .308.036.447.105L12 13.382v-2.187c0-.288.125-.562.341-.752C13.411 9.506 14 8.284 14 7c0-2.757-2.691-5-6-5S2 4.243 2 7s2.691 5 6 5c.266 0 .526-.02.783-.048a1.01 1.01 0 0 1 .109-.006Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    Resource Management <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    The system manages the distributed GPU cluster network,
    efficiently allocating computational resources based on
real - time availability and demand. <
    /p> <
    /div>
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M15 9a3.841 3.841 0 0 0-2.661 1.545A2.524 2.524 0 0 0 10 9a1 1 0 1 0 0 2c.361 0 .57.279.89 1.284C10.243 13.08 9.441 14 9 14a1 1 0 0 0 0 2 3.841 3.841 0 0 0 2.661-1.545A2.524 2.524 0 0 0 14 16a1 1 0 0 0 0-2c-.361 0-.571-.279-.89-1.284C13.757 11.92 14.559 11 15 11a1 1 0 0 0 0-2Z" /
    >
    <
    path
d = "M10 8a1 1 0 0 0 0-2H7.825c.432-2.421.983-4 2.175-4a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3C7.193 0 6.313 2.9 5.793 6H3a1 1 0 1 0 0 2h2.49c-.506 3.52-1 6-2.49 6a1 1 0 0 1-1-1 1 1 0 0 0-2 0 3 3 0 0 0 3 3c3.367 0 3.964-4.175 4.49-7.858L7.51 8H10Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    Keyword Analysis <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    Implemented using natural language processing
techniques, this module identifies and quantifies
significant terms from the extracted URLs. <
    /p> <
    /div>
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5ZM15.707 14.293 13.314 11.9a8.019 8.019 0 0 1-1.414 1.414l2.393 2.393a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    AI Agent Orchestration <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    Powered by AI16Z DAO 's toolkit, our platform
intelligently distributes and manages AI agent tasks
across the available GPU resources
for optimal
performance. <
    /p> <
    /div> <
    /div> <
    /div>
    <!-- Row -->
    <
    div class = "py-8" >
    <
    div >
    <
    div
class = "inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6" >
    User Management <
    /div> <
    /div> <
    div class = "grid md:grid-cols-3 gap-8 md:gap-12 mb-2" >
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M2 6H0V2a2 2 0 0 1 2-2h4v2H2v4ZM16 6h-2V2h-4V0h4a2 2 0 0 1 2 2v4ZM14 16h-4v-2h4v-4h2v4a2 2 0 0 1-2 2ZM6 16H2a2 2 0 0 1-2-2v-4h2v4h4v2Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    Smart Contract Integration <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    Utilizes Solana 's high-performance blockchain for secure
and automated transaction processing, ensuring fair
compensation
for GPU providers. <
    /p> <
    /div>
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    Automated Resource Allocation <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    Features a self - sustaining execution system that
automatically matches AI agents with appropriate GPU
resources based on their computational requirements. <
    /p> <
    /div>
    <!-- Feature -->
    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg
class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1ZM3 2h10v8H9v4H3V2Z" /
    >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" >
    Decentralized Processing <
    /h4> <
    /div> <
    p class = "text-sm text-slate-400" >
    Implements distributed processing across multiple GPU
nodes to enhance performance and ensure reliable task
execution, with built - in failover mechanisms. <
    /p> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section>

    <!-- Features #2 -->
    <
    section class = "relative" >
    <!-- Particles animation -->
    <
    div
class = "absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32" >
    <
    div class = "absolute inset-0 -z-10"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "6"
data - particle - staticity = "30" >
    < /canvas> <
    /div> <
    /div>

    <
    div id = "opos"
class = "max-w-6xl mx-auto px-4 sm:px-6" >
    <
    div class = "pt-16 md:pt-32" >
    <!-- Section header -->
    <
    div class = "max-w-3xl mx-auto text-center pb-12 md:pb-20" >
    <
    h2
class = "h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" >
    Only Possible on Solana <
    /h2> <
    p class = "text-lg text-slate-400" >
    The integration leverages Solana 's high throughput and low
latency to provide near real - time data storage and retrieval. <
    /p> <
    /div>

    <!-- Highlighted boxes -->
    <
    div class = "relative pb-12 md:pb-20" >
    <!-- Blurred shape -->
    <
    div
class = "absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
aria - hidden = "true" >
    <
    svg
xmlns = "http://www.w3.org/2000/svg"
width = "434"
height = "427" >
    <
    defs >
    <
    linearGradient
id = "bs2-a"
x1 = "19.609%"
x2 = "50%"
y1 = "14.544%"
y2 = "100%" >
    <
    stop offset = "0%"
stop - color = "#6366F1" / >
    <
    stop
offset = "100%"
stop - color = "#6366F1"
stop - opacity = "0" /
    >
    <
    /linearGradient> <
    /defs> <
    path
fill = "url(#bs2-a)"
fill - rule = "evenodd"
d = "m346 898 461 369-284 58z"
transform = "translate(-346 -898)" /
    >
    <
    /svg> <
    /div>
    <!-- Grid -->
    <
    div class = "grid md:grid-cols-12 gap-6 group"
data - highlighter >
    <!-- Box #1 -->
    <
    div class = "md:col-span-12"
data - aos = "fade-down" >
    <
    div
class = "relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <
    div
class = "flex flex-col md:flex-row md:items-center md:justify-between" >
    <!-- Blurred shape -->
    <
    div
class = "absolute right-0 top-0 blur-2xl"
aria - hidden = "true" >
    <
    svg
xmlns = "http://www.w3.org/2000/svg"
width = "342"
height = "393" >
    <
    defs >
    <
    linearGradient
id = "bs-a"
x1 = "19.609%"
x2 = "50%"
y1 = "14.544%"
y2 = "100%" >
    <
    stop offset = "0%"
stop - color = "#6366F1" / >
    <
    stop
offset = "100%"
stop - color = "#6366F1"
stop - opacity = "0" /
    >
    <
    /linearGradient> <
    /defs> <
    path
fill = "url(#bs-a)"
fill - rule = "evenodd"
d = "m104 .827 461 369-284 58z"
transform = "translate(0 -112.827)"
opacity = ".7" /
    >
    <
    /svg> <
    /div>
    <!-- Radial gradient -->
    <
    div
class = "absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" >
    < /div> <
    div
class = "absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" >
    < /div> <
    /div>

    <!-- Text -->
    <
    div
class = "md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0" >
    <
    div class = "mb-5" >
    <
    div >
    <
    h3
class = "inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1" >
    Optimized
for security
    <
    /h3> <
    p class = "text-slate-400" >
    Ensures secure GPU resource allocation and
payment processing
while leveraging the
high - performance capabilities of the Solana
network.The platform implements robust
authentication through Solflare wallet
integration and maintains comprehensive
monitoring of resource usage and task
execution. <
    /p> <
    /div> <
    /div> <
    div >
    <
    a
class = "btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
href = "#0" >
    <
    span class = "relative inline-flex items-center" >
    Learn more <
    span
class = "tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
    - & gt; < /span >
<
/span> <
/a> <
/div> <
/div>
<!-- Image -->
<
div
class = "relative w-full h-64 md:h-auto overflow-hidden" >
    <
    img
class = "absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0"
src = "./images/feature-image-01.png"
width = "504"
height = "400"
alt = "Feature 01" /
    >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    /div>
    <!-- Box #2 -->
    <
    div class = "md:col-span-7"
data - aos = "fade-down" >
    <
    div
class = "relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <
    div class = "flex flex-col" >
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" >
    < /div> <
    /div>
    <!-- Text -->
    <
    div
class = "md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8" >
    <
    div >
    <
    h3
class = "inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1" >
    Dashboard <
    /h3> <
    p class = "text-slate-400" >
    It offers a user - friendly interface to users
with the dashboard. <
    /p> <
    /div> <
    /div>
    <!-- Image -->
    <
    div
class = "relative w-full h-64 md:h-auto overflow-hidden md:pb-8" >
    <
    img
class = "absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
src = "./images/feature-image-02.png"
width = "536"
height = "230"
alt = "Feature 02" /
    >
    <
    /div> <
    /div> <
    /div> <
    /div> <
    /div>
    <!-- Box #3 -->
    <
    div class = "md:col-span-5"
data - aos = "fade-down" >
    <
    div
class = "relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.slate.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden" >
    <
    div
class = "relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden" >
    <
    div class = "flex flex-col" >
    <!-- Radial gradient -->
    <
    div
class = "absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
aria - hidden = "true" >
    <
    div
class = "absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" >
    < /div> <
    /div>
    <!-- Text -->
    <
    div
class = "md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8" >
    <
    div >
    <
    h3
class = "inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1" >
    <
    a
href = "https://github.com/dante-gpu"
class = "text-inherit hover:underline" >
    Flexible Resource Management < /a >
    <
    /h3> <
    p class = "text-slate-400" >
    Quickly configure and optimize GPU resource
allocation based on AI agent requirements and
computational needs. <
    /p> <
    /div> <
    /div>
    <!-- Image -->
    <
    div
class = "relative w-full h-64 md:h-auto overflow-hidden md:pb-8" >
    <
    a
href = "https://github.com/dante-gpu"
class = "block" >
    <
    img
class = "absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
src = "./images/feature-image-03.png"
width = "230"
height = "230"
alt = "Feature 03" /
    >
    <
    /a> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div> <
    /div>

    <!-- Features list -->
    <!--                      <div class="grid md:grid-cols-3 gap-8 md:gap-12">

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Filters < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div>

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Configurable < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div>

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Adaptable < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div>

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Authorization < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div>

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Management < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div>

    <
    div >
    <
    div class = "flex items-center space-x-2 mb-1" >
    <
    svg class = "shrink-0 fill-slate-300"
xmlns = "http://www.w3.org/2000/svg"
width = "16"
height = "16" >
    <
    path
d = "M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" / >
    <
    /svg> <
    h4 class = "font-medium text-slate-50" > Building < /h4> <
    /div> <
    p class = "text-sm text-slate-400" > Login box must find the right balance
for the user
convenience, privacy and security. < /p> <
    /div> <
    /div>
    -->
    <
    /div> <
    /div> <
    /section>

    <!-- Testimonials carousel -->
    <
    section id = "team" >
    <
    div class = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
    <
    div class = "py-12 md:py-20" >
    <!-- Content -->
    <
    div class = "max-w-3xl mx-auto text-center pb-12 md:pb-20" >
    <
    h2
class = "h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-2" >
    DanteGPU Team <
    /h2> <
    /div>

    <!-- Team members -->
    <
    div class = "flex flex-wrap justify-center gap-4 sm:gap-6 mx-auto" >
    <!-- Member #01 -->
    <
    div
class = "relative flex flex-col items-center justify-center py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity" >
    <
    div class = "flex items-center space-x-4" >
    <
    img
class = "shrink-0 rounded-full"
src = "./images/baturalp.jpg"
width = "48"
height = "48"
alt = "Team 02" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-slate-100 mb-0.5" >
    Baturalp Güvenç <
    /div> <
    div class = "text-sm text-purple-500 font-medium" >
    Blockchain Developer <
    /div> <
    /div> <
    /div> <
    a
class = "shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity focus:outline-none group-hover:before:absolute group-hover:before:inset-0"
href = "https://x.com/baturalpguvnc"
aria - label = "Member's Twitter" >
    <
    svg
class = "fill-current"
xmlns = "http://www.w3.org/2000/svg"
width = "24"
height = "24" >
    <
    path
d = "M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" >
    < /path> <
    /svg> <
    /a> <
    /div>

    <!-- Member #02 -->
    <
    div
class = "relative flex flex-col items-center justify-center py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity" >
    <
    div class = "flex items-center space-x-4" >
    <
    img
class = "shrink-0 rounded-full"
src = "./images/akinci.jpg"
width = "48"
height = "48"
alt = "Team 02" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-slate-100 mb-0.5" >
    Muhammed Akıncı <
    /div> <
    div class = "text-sm text-purple-500 font-medium" >
    AI Developer <
    /div> <
    /div> <
    /div> <
    a
class = "shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity focus:outline-none group-hover:before:absolute group-hover:before:inset-0"
href = "https://x.com/MuhammedAknc15"
aria - label = "Member's Twitter" >
    <
    svg
class = "fill-current"
xmlns = "http://www.w3.org/2000/svg"
width = "24"
height = "24" >
    <
    path
d = "M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" >
    < /path> <
    /svg> <
    /a> <
    /div>

    <!-- Member #03 -->
    <
    div
class = "relative flex flex-col items-center justify-center py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity" >
    <
    div class = "flex items-center space-x-4" >
    <
    img
class = "shrink-0 rounded-full"
src = "./images/mehmet.jpeg"
width = "48"
height = "48"
alt = "Team 02" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-slate-100 mb-0.5" >
    Mehmet Hayırlı <
    /div> <
    div class = "text-sm text-purple-500 font-medium" >
    Blockchain Developer <
    /div> <
    /div> <
    /div> <
    a
class = "shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity focus:outline-none group-hover:before:absolute group-hover:before:inset-0"
href = "https://x.com/mehmetzsche"
aria - label = "Member's Twitter" >
    <
    svg
class = "fill-current"
xmlns = "http://www.w3.org/2000/svg"
width = "24"
height = "24" >
    <
    path
d = "M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" >
    < /path> <
    /svg> <
    /a> <
    /div>
    <!-- Member #04 -->
    <
    div
class = "relative flex flex-col items-center justify-center py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity" >
    <
    div class = "flex items-center space-x-4" >
    <
    img
class = "shrink-0 rounded-full"
src = "./images/yigid.jpg"
width = "48"
height = "48"
alt = "Team 02" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-slate-100 mb-0.5" >
    Yigid Balaban <
    /div> <
    div class = "text-sm text-purple-500 font-medium" >
    Frontend Developer <
    /div> <
    /div> <
    /div> <
    a
class = "shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity focus:outline-none group-hover:before:absolute group-hover:before:inset-0"
href = "https://x.com/fybalaban"
aria - label = "Member's Twitter" >
    <
    svg
class = "fill-current"
xmlns = "http://www.w3.org/2000/svg"
width = "24"
height = "24" >
    <
    path
d = "M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" >
    < /path> <
    /svg> <
    /a> <
    /div>
    <!-- Member #05 -->
    <
    div
class = "relative flex flex-col items-center justify-center py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity" >
    <
    div class = "flex items-center space-x-4" >
    <
    img
class = "shrink-0 rounded-full"
src = "./images/salih.jpg"
width = "48"
height = "48"
alt = "Team 02" /
    >
    <
    div class = "grow" >
    <
    div class = "font-bold text-slate-100 mb-0.5" >
    @newpascha <
    /div> <
    div class = "text-sm text-purple-500 font-medium" >
    Product Manager <
    /div> <
    /div> <
    /div> <
    a
class = "shrink-0 text-slate-500 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity focus:outline-none group-hover:before:absolute group-hover:before:inset-0"
href = "https://x.com/newpascha"
aria - label = "Member's Twitter" >
    <
    svg
class = "fill-current"
xmlns = "http://www.w3.org/2000/svg"
width = "24"
height = "24" >
    <
    path
d = "M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" >
    < /path> <
    /svg> <
    /a> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section>
    <!-- Testimonials -->
    <
    section >
    <
    div class = "max-w-3xl mx-auto px-4 sm:px-6" >
    <
    div class = "relative pb-12 md:pb-20" >
    <!-- Particles animation -->
    <
    div
class = "absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6" >
    <
    div class = "absolute inset-0 -z-10"
aria - hidden = "true" >
    <
    canvas
data - particle - animation
data - particle - quantity = "10"
data - particle - staticity = "30" >
    < /canvas> <
    /div> <
    /div>

    <!-- Carousel -->
    <
    div class = "text-center"
x - data = "carousel" >
    <!-- Testimonial image -->
    <
    div
class = "relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]" >
    <
    div
class = "absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-20" >
    <!-- Alpine.js template for testimonial images: https://github.com/alpinejs/alpine#x-for -->
    <
    template x -
    for = "(item, index) in items": key = "index" >
    <
    div
x - show = "active === index"
class = "absolute inset-0 -z-10"
x - transition: enter = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
x - transition: enter - start = "opacity-0 -rotate-[60deg]"
x - transition: enter - end = "opacity-100 rotate-0"
x - transition: leave = "transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
x - transition: leave - start = "opacity-100 rotate-0"
x - transition: leave - end = "opacity-0 rotate-[60deg]" >
    <
    img
class = "relative top-11 left-1/2 -translate-x-1/2 rounded-full": src = "item.img"
width = "56"
height = "56": alt = "item.name" /
    >
    <
    /div> <
    /template> <
    /div> <
    /div>
    <!-- Text -->
    <
    div class = "mb-10" >
    <
    div
class = "relative flex flex-col transition-all duration-150 delay-300 ease-in-out"
x - ref = "testimonials" >
    <!-- Alpine.js template for testimonials: https://github.com/alpinejs/alpine#x-for -->
    <
    template x -
    for = "(item, index) in items": key = "index" >
    <
    div
x - show = "active === index"
x - transition: enter = "transition ease-in-out duration-500 delay-200 order-first"
x - transition: enter - start = "opacity-0 -translate-x-4"
x - transition: enter - end = "opacity-100 translate-x-0"
x - transition: leave = "transition ease-out duration-300 delay-300 absolute"
x - transition: leave - start = "opacity-100 translate-x-0"
x - transition: leave - end = "opacity-0 translate-x-4" >
    <
    div
class = "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
x - text = "item.quote" >
    < /div> <
    /div> <
    /template> <
    /div> <
    /div>
    <!-- Buttons -->
    <
    div class = "flex flex-wrap justify-center -m-1.5" >
    <!-- Alpine.js template for buttons: https://github.com/alpinejs/alpine#x-for -->
    <
    template x -
    for = "(item, index) in items": key = "index" >
    <
    button
class = "btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none": class = "active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'"
@click = "active = index; stopAutorotate();" >
    <
    span class = "relative" >
    <
    span class = "text-slate-50"
x - text = "item.name" > < /span> <
    span x - text = "item.role" > < /span> <
    /span> <
    /button> <
    /template> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section>

    <!-- CTA -->
    <
    /main>

    <!-- Site footer -->
    <
    footer id = "contact" >
    <
    div class = "max-w-6xl mx-auto px-4 sm:px-6" >
    <!-- Blocks -->
    <
    div class = "grid sm:grid-cols-12 gap-8 py-8 md:py-12 footer" >
    <!-- 1st block -->
    <
    div class = "sm:col-span-12 lg:col-span-4 order-1 lg:order-none" >
    <
    div
class = "h-full flex flex-col sm:flex-row lg:flex-col justify-between" >
    <
    div class = "mb-5 sm:mb-0" >
    <
    div class = "mb-4" >
    <!-- Logo -->
    <
    a
class = "inline-flex footer"
href = "#main"
aria - label = "Cruip" >
    <
    img
src = "./images/dpu-logo.png"
width = "50"
height = "50"
alt = "Stellar" /
    >
    <
    /a> <
    /div> <
    /div>
    <!-- Social links -->
    <
    ul class = "flex" >
    <
    li class = "footer" >
    <
    a
class = "flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
href = "https://x.com/dantegpu"
aria - label = "Twitter" >
    <
    svg
class = "w-8 h-8 fill-current"
viewBox = "0 0 32 32"
xmlns = "http://www.w3.org/2000/svg" >
    <
    path
d = "m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" /
    >
    <
    /svg> <
    /a> <
    /li> <
    li class = "ml-2 footer" >
    <
    a
class = "flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
href = "https://github.com/dante-gpu"
aria - label = "Github" >
    <
    svg
class = "w-8 h-8 fill-current"
viewBox = "0 0 32 32"
xmlns = "http://www.w3.org/2000/svg" >
    <
    path
d = "M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" /
    >
    <
    /svg> <
    /a> <
    /li> <
    li class = "ml-2 footer" >
    <
    a
class = "flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
href = "https://t.me/dantegpu"
aria - label = "Telegram" >
    <
    svg
class = "fill-current"
width = "32"
height = "32"
viewBox = "0 0 32 32"
xmlns = "http://www.w3.org/2000/svg" >
    <
    path
d = "M16 8C11.5806 8 8 11.5806 8 16C8 20.4194 11.5806 24 16 24C20.4194 24 24 20.4194 24 16C24 11.5806 20.4194 8 16 8ZM19.7097 13.4419C19.5903 14.7065 19.0677 17.7774 18.8032 19.1935C18.6903 19.7935 18.471 19.9935 18.2581 20.0129C17.7935 20.0548 17.4419 19.7065 16.9903 19.4097C16.2871 18.9484 15.8871 18.6613 15.2065 18.2097C14.4161 17.6903 14.929 17.4032 15.3774 16.9355C15.4968 16.8129 17.5419 14.9516 17.5806 14.7839C17.5871 14.7613 17.5903 14.6839 17.5419 14.6419C17.4935 14.6 17.4258 14.6161 17.3774 14.6258C17.3065 14.6409 16.1817 15.3839 14.0032 16.8548C13.6849 17.0742 13.3957 17.1806 13.1355 17.1742C12.8484 17.1677 12.3 17.0129 11.8903 16.8806C11.3903 16.7194 10.9903 16.6323 11.0258 16.3548C11.043 16.2108 11.2419 16.0634 11.6226 15.9129C13.9538 14.8978 15.5086 14.228 16.2871 13.9032C18.5097 12.9806 18.971 12.8194 19.271 12.8129C19.3387 12.8129 19.4839 12.829 19.5806 12.9065C19.6438 12.962 19.6841 13.039 19.6935 13.1226C19.711 13.2281 19.7164 13.3352 19.7097 13.4419Z" >
    < /path> <
    /svg> <
    /a> <
    /li> <
    /ul> <
    /div> <
    /div> <
    /div> <
    /div> <
    /footer> <
    /div>

    <
    script src = "./js/vendors/alpinejs.min.js"
defer > < /script> <
    script src = "./js/vendors/aos.js" > < /script> <
    script src = "./js/vendors/swiper-bundle.min.js" > < /script> <
    script src = "./js/main.js" > < /script> <
    /body> <
    /html></script>