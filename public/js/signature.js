
/**
 * Created by fuguang on 2017/7/6.
 */
//$(function () {
    // $("#op_container_text").attr("style","max-height: 100rem;");
    // $("#expand").parent().attr("style","display: none");
    // $("#expand").remove();
//}


$(document).ready(() => {
    ScatterJS.plugins( new ScatterEOS() );

    const network = ScatterJS.Network.fromJson({
        blockchain:'eos',
        chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        host:'nodes.get-scatter.com',
        port:443,
        protocol:'https'
    });
    
    ScatterJS.connect('ss', {network}).then(connected => {
        if(!connected) return console.error('no scatter');
    });
    

    let buttonDom = $(".share-module button")
    let buttonDomParent = $(".share-module button").parent()
    let buttonDomCopy = buttonDom.clone()

    buttonDom.remove()
    buttonDomParent.prepend(buttonDomCopy)
    buttonDomCopy.css({
        'backgroundColor': '#167f16f0',
        'borderColor': '#167f16f0'
    }).click(() => {
        alert('开始赞赏(有点慢....')

        const eos = ScatterJS.eos(network, Eos);
    
        ScatterJS.login().then(id => {
            if(!id) return console.error('no identity');
            const account = ScatterJS.account('eos');
            const options = {authorization:[`${account.name}@${account.authority}`]};
            eos.transfer(account.name, 'xiaotiandada', '0.0001 EOS', account.name, options).then(res => {
                console.log('sent: ', res);
                alert('赞赏成功')
            }).catch(err => {
                console.error('error: ', err);
                alert('赞赏失败')
            });
        });
    })

    
});
