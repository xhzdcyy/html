!function () {
    let view = document.querySelector('section.message');
    let model = {
        init: function () {
            var APP_ID = '6SUtqMBn3EPKF3FMYPmiEfDX-9Nh9j0Va';
            var APP_KEY = 'VctHhK7vyadQ0N3o631RN80M';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function () {
            let query = new AV.Query('messages');
            return query.find()
        },
        save: function (name, content) {
            let Message = AV.Object.extend('messages');
            let message = new Message();
            return message.save({
                name: name,
                content: content
            })
        }
    };
    let controller = {
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('#postMessageForm');
            model.init();
            this.loadMessages();
            this.bindEvents();
        },
        
        loadMessages: function () {
            model.fetch().then((messages) => {
                console.log(messages);
                let array = messages.map((item) => item.attributes)
                console.log(array);
                array.forEach((item) => {
                    let li = document.createElement('li');
                    li.innerText = item.name + ': ' + item.content;
                    this.messageList.append(li);
                })
            })
        },
        bindEvents: function () {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveMessage();
            })
        },
        saveMessage: function () {
            let myForm = this.form;
            let content = myForm.querySelector('input[name=content]').value;
            let name = myForm.querySelector('input[name=name]').value;
            console.log(content);
            model.save(name, content).then(function (object) {
                myForm.querySelector('input[name=content]').value = '';
                console.log(object);
                let li = document.createElement('li');
                li.innerText = object.attributes.name + ': ' + object.attributes.content;
                let messageList = document.querySelector('#messageList');
                messageList.append(li);
            })
        }
    }

    controller.init(view, model);


}.call();