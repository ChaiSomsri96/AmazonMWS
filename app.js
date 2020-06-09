const MwsApi = require('amazon-mws');

const amazonMws = new MwsApi();
amazonMws.setApiKey("AWSAccessKey", "ClientSecret");
amazonMws.setHost('mws-eu.amazonservices.com');
amazonMws.reports.search({
    Version: '2009-01-01',
    Action: 'GetReportList',
    SellerId: 'ARP7QSGTE402H',
    MWSAuthToken: 'Amazon MWS Token',
    'ReportTypeList.Type.1': '_GET_V2_SETTLEMENT_REPORT_DATA_FLAT_FILE_', //optional
    AvailableFromDate: new Date(2020, 4, 4),
    AvailableToDate: new Date(2020, 5, 5),
    MaxCount: 100
}, function (error, response) {
    if (error) {
        console.log('error ', error);
        return;
    }
    console.log('response', response);
});


amazonMws.reports.search({
    Version: '2009-01-01',
    Action: 'GetReport',
    SellerId: 'ARP7QSGTE402H',
    MWSAuthToken: 'Amazon MWS Token',
    ReportId: '21652609752018395'
}, function (error, response) {
    if (error) {
        console.log('error ', error);
        return;
    }
    console.log('response', response.data);
});


amazonMws.orders.search({
    Version: '2013-09-01',
    Action: 'ListOrders',
    SellerId: 'ARP7QSGTE402H',
    MWSAuthToken: 'Amazon MWS Token',
    'MarketplaceId.Id.1': 'A1F83G8C2ARO7P',
    CreatedAfter: new Date(2020, 1, 22),
    CreatedBefore: new Date(2020, 2, 5)
}, function (error, response) {
    if (error) {
        console.log('error ', error);
        return;
    }
    var fs = require('fs');
    fs.writeFile("test.txt", JSON.stringify(response.Orders.Order), function(err) {
        if (err) {
            console.log(err);
        }
    });
});

