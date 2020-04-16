import { clearTimeout } from "timers";

 var destroyElem;
 const message = {
    config: {
        top: "24px",
        duration:1,
        getContainer: "",
        content: "message",
        top:true,
        iconClass:""
    },
    destroy(elem){
        destroyElem= setTimeout(function () {
            elem.className+=" move-up-leave move-up-leave-active ";
            //动画结束后删除元素
            setTimeout(()=>{
                 elem.remove();
            },1000)
           
        }, this.config.duration * 1000);

    },
    success(options) {
        return this.init(options,"success");

    },
    error(options) {
        return this.init(options,"error");
      
    },
    warning(options) {
        return this.init(options,"warning");
    },
    info(options) {
        return this.init(options,"info");
    },
    warn(options) {
        return this.init(options,"warn");
    },
    loading(options) {
       return this.init(options,"loading");

    },
    init(options,type){
        clearTimeout(destroyElem);
       if (typeof options === "string") {
            this.config.content = options;
        }
        else {
            if (typeof Object.assign != 'function') {
                Object.defineProperty(Object, "assign", {
                  value: function assign(target, varArgs) { // .length of function is 2
                    if (target == null) { // TypeError if undefined or null
                      throw new TypeError('Cannot convert undefined or null to object');
                    }
              
                    let to = Object(target);
              
                    for (var index = 1; index < arguments.length; index++) {
                      var nextSource = arguments[index];
              
                      if (nextSource != null) { // Skip over if undefined or null
                        for (let nextKey in nextSource) {
                          // Avoid bugs when hasOwnProperty is shadowed
                          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                          }
                        }
                      }
                    }
                    return to;
                  },
                  writable: true,
                  configurable: true
                });
              }
            Object.assign(this.config, options);
        }
        this.config.type=type;
        let elem= this._createMessage(this.config.type);
        if (this.config.duration > 0) {
            this.destroy(elem);
        }
        else{
            return  elem;
        }
    },
    _createMessage() {
        
        let wrapper=document.querySelector(".message");
        if (wrapper === null) {
            wrapper = document.createElement("div");
            wrapper.className = "message";
            if(this.config.top){
                window.parent.document.body.appendChild(wrapper)
            }
            else{
                document.body.appendChild(wrapper);
            }
        }

      let  wrapperBox = document.createElement("div");
        wrapperBox.className = "message-notice "+this.config.type;
        wrapper.appendChild(wrapperBox);
       
        var sb = [];
        sb[sb.length] = `<div class="message-notice-content">`;
        sb[sb.length] = `<div class="message-custom-content message-${this.config.type}">`;
       
        this._createIcon(sb, this.config.type);
        sb[sb.length] = this.config.content;
        sb[sb.length] = `</div>`;
        sb[sb.length] = `</div>`;
        wrapperBox.innerHTML+=sb.join('');
        return  wrapperBox;
    },
    _createIcon(sb,type){
        if (type == "success") {
            sb[sb.length] = '<i class="icon icon-success"></i>';
        }
        else if (type == "error") {
            sb[sb.length] = '<i class="icon icon-error" ></i>';
        }
        else if (type == "warning") {
            sb[sb.length] = '<i class="icon icon-warning"></i>';
        }
        else if (type == "info") {
            sb[sb.length] = '<i class="icon icon-info"></i>';
        }
        else if (type == "warn") {
            sb[sb.length] = '<i class="icon icon-warn"></i>';
        }
        else if (type == "loading") {
            sb[sb.length] = '<i class="icon icon-loading"></i>';
        }
    }
}
export default message;