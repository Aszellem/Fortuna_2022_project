let first=true;
function leaderboard(){
  let rArray = [];
  $.post( {
       url: "https://api.bscscan.com/api?module=logs&action=getLogs&fromBlock=19000000&toBlock=99999999&address=0x504295F3f77e99310B1981D600C85E0d26e141f4&topic0=0x0e1a8fb328c323a3a15d943c019fc4e7c509880b92432cdc33933e1d2f32299f&apikey=YourApiKeyToken",
       dataType: "json",
       data: {},
       success: function( data ) {
             if (data['status']==1){
               //console.log(data);
               rArray = data['result'];
             }
             let row;
             let address;
             let tip;
             let result;
             let amount;
             let payout;
             let tablerow;
             let limit = 5;
             let rowNumber = 0;
             let previous = '';
             rArray.reverse().forEach(element => {
               if (rowNumber<limit){
               row = element.data.substr(2);
               //console.log(row);
               address = row.substr(0,63);
               tip = row.substr(65,63);
               result = row.substr(129, 63);
               amount = row.substr(193, 63);
               payout = row.substr(257, 63);
               tip = parseInt(tip,16);
               retulst = parseInt(tip,16);
               tip = (tip==1) ? 'Head' : 'Tail';
               result = (result==1) ? 'Head' : 'Tail';
               tablerow = `<tr id="${element.transactionHash}"  class='click-row' target="_blank">
                <td>0x...${address.substr(59)}</td>
                <td>0x...${element.transactionHash.substr(62)}</td>
                <td>${parseInt(amount,16)/1e18}</td>
                <td>${tip}</td>
                <td>${result}</td>
                <td>${parseInt(payout,16)/1e18}</td>
               </tr>`;

               /*
               console.log(`
                Address:   0x...${address.substr(59)}
                TX Hash:   0x...${element.transactionHash.substr(62)}
                Amount:    ${parseInt(amount,16)/1e18}
                Tip:       ${tip}
                Result:    ${result}
                Payout:    ${parseInt(payout,16)/1e18}
               `);*/

               if (typeof $('#'+element.transactionHash).val() !== "string" && first == true) {
                 $('#leaderboard').append(tablerow);
               }

               if (typeof $('#'+element.transactionHash).val() !== "string" && first == false){
                 console.log(previous + "  -  " + typeof $('#'+element.transactionHash).val());

                 if (previous != '') {
                   $('#leaderboard').append(tablerow);
                   $('#'+previous).after(tablerow);
                   previous = element.transactionHash;
                   console.log('2 ' + previous);
                 }

                 if (previous == '') {
                   $('#leaderboard').prepend(tablerow);
                   previous = element.transactionHash;
                   console.log('1');
                 }
               }

               if (typeof $('#'+element.transactionHash).val() == "string" && first == false){
                 previous = element.transactionHash;
               }

               if ($('#leaderboard >tbody >tr').length > limit){
                 $('#leaderboard tr:last').remove();
               }

               //$('#leaderboard >tbody >tr:first').attr('id')

               rowNumber++;
               }
             });
             first = false;
             previous = '';

             $(".click-row").click(function() {
               console.log($(this).attr('id'));
               let url="https://bscscan.com/tx/"+$(this).attr('id');
                 window.open(url);
             });
       }

    } );


  //leaderboard();
  /*jQuery(document).ready(function($) {
    console.log("rdy");
    $(".click-row").click(function() {
      console.log($(this).attr('id'));
      let url="https://bscscan.com/tx/"+$(this).attr('id');
        window.open(url);
    });
  });*/
 }

  setInterval(leaderboard, 13000);
