function navMobile(){
    if($(window).width() < 768){
        function menuComplete(){
            $("body").prepend(`
        <header class="header-mobile">
            <div class="hamburguer">
            <img src="toggle.png">
            <span>MENU</span>
            </div>
            <div class="logo">
                <a href="/"><img src="logo.png"/></a>
            </div>
            <div class="items">
                <a href="/conta/login"><img src="user.png"></a>
                <a href="/carrinho/index"><img src="shopping-bag.png"></a>
            </div>
        </header>

        <nav class="nav-mobile close">
            <div class="nav-itens">
                <div class="busca borda-alpha">
                <form id="form-buscar" action="/buscar" method="get">
                    <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input id="auto-complete" type="text" name="q" placeholder="BUSCAR" value="" autocomplete="off" class="ui-autocomplete-input">
                    <button class="botao botao-busca fas fa-search fundo-secundario"></button>
                </form>
            </div>
            <ul class="nivel-um">
                <li class="categoria-id-10313452  borda-principal">
                    <a href="https://layout-ct-brand.lojaintegrada.com.br/acessorios" title="Acessórios">
                        <strong class="titulo cor-secundaria">Acessórios</strong>
                    </a>
                </li>
            
                <li class="categoria-id-10313450  borda-principal">
                    <a href="https://layout-ct-brand.lojaintegrada.com.br/news" title="News">
                        <strong class="titulo cor-secundaria">News</strong>
                    </a>
                </li>
            
                <li class="categoria-id-10313451 com-filho borda-principal">
                    <a href="https://layout-ct-brand.lojaintegrada.com.br/roupas" title="Roupas">
                        <strong class="titulo cor-secundaria">Roupas</strong>
                        <i class="fas fa-chevron-down fundo-secundario"></i>
                    </a>
            
                    <ul class="nivel-dois borda-alpha">
                        <li class="categoria-id-10313629 ">
                            <a href="https://layout-ct-brand.lojaintegrada.com.br/casacos" title="Casacos">
                                Casacos
                            </a>
                        </li>
            
                        <li class="categoria-id-10313631 ">
                            <a href="https://layout-ct-brand.lojaintegrada.com.br/saias" title="Saias">
                                Saias
                            </a>
                        </li>
            
                        <li class="categoria-id-10313630 ">
                            <a href="https://layout-ct-brand.lojaintegrada.com.br/shorts" title="Shorts">
                                Shorts
                            </a>
                        </li>
                    </ul>
                </li>
                
                <li class="categoria-id-10313455  borda-principal"><svg class="svg-inline--fa fa-tags fa-w-20 sale"
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                        <path fill="currentColor"
                            d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z">
                        </path>
                    </svg>
                    <a href="https://layout-ct-brand.lojaintegrada.com.br/sale" title="Sale">
                        <strong class="titulo cor-secundaria">Sale</strong>
                    </a>
                </li>
            </ul>
            <div class="others-items">
                <a href="/checkout/index">SACOLA DE COMPRAS</a>
                <a href="/conta/login">MINHA CONTA</a>
                <a href="/conta/login" class="login-status">LOGIN</a>
            </div>
            </div>
            <div class="nav-close">
                <i class="fas fa-times"></i>
            </div>
        </nav>`);

            //$(".nav-itens").after($(".menu.superior > ul").eq(1).clone())
        }

        function hamburguer(){
            $(".header-mobile .hamburguer, .nav-mobile .nav-close i").click(function(){
                $(".nav-mobile").toggleClass("close");
                $("body").toggleClass("menu-open");
            })
        }

        function navMenu(){
            let i = document.querySelectorAll(".nivel-um i");
            i.forEach(function(item){
                item.addEventListener("click", function(e){
                    e.preventDefault();
                    let c = e.path[2].children[1],
                        t = e.target;
                    $(c).toggle("fast");

                    if(t.classList.contains("fa-chevron-down")){ // icon-chevron-down
                        $(t).removeClass("fa-chevron-down").addClass("fa-chevron-up")
                    }else{
                        $(t).removeClass("fa-chevron-up").addClass("fa-chevron-down")
                    }
                })
            })
        }

        menuComplete();
        hamburguer();
        navMenu();
    }
}


window.addEventListener("load", navMobile());