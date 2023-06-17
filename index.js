const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth, MessageMedia, Location, List ,Call} = require('whatsapp-web.js');

// Path where the session data will be stored

// Load the session data if it has been previously saved


// Use the saved values
// const client = new Client({
//     authStrategy: new LocalAuth({
//          clientId: "client-one" //Un identificador(Sugiero que no lo modifiques)
//     })
// }) 
// Save session values to the file upon successful auth

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', message => {
    if (message.body === 'السلام عليكم' || message.body.includes('السلام')   || message.body.includes('صباح الخير')) {
        const greetingResponse = 'وعليكم السلام ورحمة الله';

        
        const welcomeMessage = "شكراً لتواصلكم معنا ونتشرف بخدمتكم على مدار الساعة. \n\nلطلب استقدام جديد يرجى ارسال الرقم 1\nلمتابعة طلب سابق يرجى ارسال الرقم 2\nللاستفسارات الأخرى يرجى ارسال الرقم 3";
        client.sendMessage(message.from, greetingResponse);
        client.sendMessage(message.from, welcomeMessage);
        }
        else if (message.body.includes('مرحبا') || message.body.includes('أهلا')) {
                    const greetingResponse = 'مرحبا أهلا بك';
                    const welcomeMessage = "شكراً لتواصلكم معنا ونتشرف بخدمتكم على مدار الساعة. \n\nلطلب استقدام جديد يرجى ارسال الرقم 1\nلمتابعة طلب سابق يرجى ارسال الرقم 2\nللاستفسارات الأخرى يرجى ارسال الرقم 3";
                 client.sendMessage(message.from, greetingResponse);
        client.sendMessage(message.from, welcomeMessage);   
        }
     else if (message.body === '1') {
        const countryListMessage = "إختر الدولة:\n أوغندا\n إثيوبيا\n الفلبين";
        client.sendMessage(message.from, countryListMessage);
    } else if (message.body === '2') {
        client.sendMessage(message.from, 'الرجاء تزويدنا برقم الهوية و إسم صاحب العمل');
    } else if (message.body === '3') {
        client.sendMessage(message.from, 'المرجو إرسال إستفسارك وسنقوم برد عليك في أقرب وقت ممكن');
    } else if (message.body === 'أوغندا' || message.body === 'اوغندا' || message.body ==='اغندا' || message.body === 'أغندا' || message.body === 'أريد أغندا' || message.body ==='أوغندة') {
        const ugandaMessage = `شكراً لتواصلكم مع التفرد للاستقدام
رضاكم محل اهتمامنا ونتطلع لخدمتكم

((احتياجاتكم أولوياتنا))

نتشرف بخدمتكم على مدار الساعة، فيما يلي اسعار و خدمات الاستقدام، مع توضيح الخصم في حال وجوده، وللاطلاع على السير الذاتية تفضل بالضغط على الرابط تحت كل خدمة.

أوغندا 🇺🇬
حسب المواصفات
قبل الخصم ٦٥٨٥ شامل الضريبة
خصم لفترة محدودة ٥٧١٠ ريال شامل الضريبة
فترة الاستقدام ٤٥ يوم
الراتب ٨٠٠ ريال

غير مسلمة لم يسبق لها العمل
https://drive.google.com/drive/folders/1FuOBwFdHcl0XNGIo77_v0y_2hIk2PLpP

غير مسلمة سبق لها العمل
https://drive.google.com/drive/folders/1s2XCCHiXZ31oAwKs5jzRsjqSZkHyLljM

مسلمة لم يسبق لها العمل
https://drive.google.com/drive/folders/1c-FD-2gjZjsurjGQaRQ_Tp35qrGGHr0j

مسلمة سبق لها العمل
https://drive.google.com/drive/folders/1eY-hko9vYGha9RnRwWjLSILjsdvm8aO9`;

        client.sendMessage(message.from, ugandaMessage);
    } else if (message.body ==='فيليبين' || message.body ==='فلبين' || message.body === 'أريد الفلبين' ||  message.body ==='الفيليبين' || message.body ==='الفلبين') {
        const philippinesMessage = `شكراً لتواصلكم مع التفرد للاستقدام
رضاكم محل اهتمامنا ونتطلع لخدمتكم

((احتياجاتكم أولوياتنا))

نتشرف بخدمتكم على مدار الساعة، فيما يلي اسعار و خدمات الاستقدام، مع توضيح الخصم في حال وجوده، وللاطلاع على السير الذاتية تفضل بالضغط على الرابط تحت كل خدمة.

الفلبين 🇵🇭
حسب المواصفات
قبل الخصم ١٩٨٨١ شامل الضريبة
خصم لفترة محدودة ١٧٥٠٠ شامل الضريبة
فترة الاستقدام ٦٠ يوم
الراتب ١٥٠٠

غير مسلمة لم يسبق لها العمل
https://drive.google.com/drive/folders/1EuTEUhy27QhKhfWUg-mPdCgf0XrxZ6OA

غير مسلمة سبق لها العمل
https://drive.google.com/drive/folders/1_Q_9inZTIofvhunNNeh6MNcdaaGcBX2C

مسلمة لم يسبق لها العمل
https://drive.google.com/drive/folders/1U5DKyU5xuWEstAmf3aBeXsGcD4ccldae

مسلمة سبق لها العمل
https://drive.google.com/drive/folders/1452JzNid7ostuI3jKyekzzi7zwcrea4j

الفلبين 🇵🇭
معينة بإسم
قبل الخصم ١٦١٠٠ شامل الضريبة
خصم لفترة محدودة ١٣٩٩٠ ريال شامل الضريبة
الراتب ١٥٠٠

امكانية التأمين على عقد العاملة وتتراوح التكلفة من 300 الى 1500 ريال تختلف من شركة تأمين لأخرى.
ومنافع التأمين هي كالتالي:
تعويض صاحب العمل تكاليف الاستقدام لمدة 24 شهر، ويشمل الضمان:
- التغيب عن العمل.
- رفض العمل.
- العجز عن اداء العمل نتيجة اصابة او مرض.
- في حال الوفاة لا سمح الله تغطية تكاليف شحن الجثمان.`;

        client.sendMessage(message.from, philippinesMessage);
    } else if (message.body ==='إثيوبيا' || message.body ==='اتيوبيا' || message.body === 'أريد إثيوبيا' || message.body ==='اثيوبيا') {
        const ethiopiaMessage = `شكراً لتواصلكم مع التفرد للاستقدام
        رضاكم محل اهتمامنا ونتطلع لخدمتكم
        
         ((احتياجاتكم أولوياتنا))
        
        نتشرف بخدمتكم على مدار الساعة، فيما يلي اسعار و خدمات الاستقدام، مع توضيح الخصم في حال وجوده، وللاطلاع على السير الذاتية تفضل بالضغط على الرابط تحت كل خدمة.
        
        اثيوبيا 🇪🇹
        حسب المواصفات 
        قبل الخصم ٧٩٣٥ شامل الضريبة
        خصم لفترة محدودة 5405 شامل الضريبة
        فترة الاستقدام ٣٠ يوم
        الراتب 1000
        
        مسلمة لم يسبق لها العمل
        https://drive.google.com/drive/folders/1FdUNlkP-e86QR4KcM8cvF3IqFhpCdo2z
        
        مسلمة سبق لها العمل
        https://drive.google.com/drive/folders/15jq0QPVRFwi30PFWW0KA8Lt7PVIWvQrj
        
        غير مسلمة سبق لها العمل
        https://drive.google.com/drive/folders/1bftG2e_H8YFJzHP_eVnRh-wr7GGkFufk
        
        غير مسلمة لم يسبق لها العمل
        https://drive.google.com/drive/folders/1mRfY3ONG9UkF_xLyd6TpfJInrNX5dgqm
        
        اثيوبيا 🇪🇹
        معينة بإسم 
        قبل الخصم ٧٩٣٥ شامل الضريبة
        خصم لفترة محدودة 5405 ريال شامل الضريبة
        الراتب ١٠٠٠ ريال
        
        
        امكانية التأمين على عقد العاملة وتتراوح التكلفة من 300 الى 1500 ريال تختلف من شركة تأمين لأخرى.
        ومنافع التأمين هي كالتالي:
        تعويض صاحب العمل تكاليف الاستقدام لمدة 24 شهر، ويشمل الضمان:
        - التغيب عن العمل.
        - رفض العمل.
        - العجز عن اداء العمل نتيجة اصابة او مرض.
        - في حال الوفاة لا سمح الله تغطية تكاليف شحن الجثمان.
        `;

        client.sendMessage(message.from, ethiopiaMessage);
    } 
    // else {
    //     // Default response if the country is not recognized
    //     const defaultResponse = 'عذراً، لم يتم العثور على المعلومات المطلوبة. يرجى التأكد من إدخال  الإختيار بشكل صحيح.';

    //     client.sendMessage(message.from, defaultResponse);
    // }
});



client.on('call', call => {
    // Get the caller's WhatsApp ID
    const callerId = call.peerJid._serialized;

    // Send a message to the caller
    client.sendMessage(callerId, 'Sorry, I missed your call. How can I assist you?');
});
client.initialize();
