using BoredApiConsoleApp;
using Newtonsoft.Json;

var httpClient = new HttpClient();
var sqlManager = new SqlManager();

while (true)
{
    try
    {
        var response = await httpClient.GetAsync("https://www.boredapi.com/api/activity");

        var responseBody = await response.Content.ReadAsStringAsync();

        Console.WriteLine($"{DateTime.Now} | {responseBody}");

        var activity = JsonConvert.DeserializeObject<ActivityProposal>(responseBody);

        if (activity != null)
        {
            sqlManager.InsertActivity(activity);
        }
    }
    catch (Exception ex)
    {
        Console.WriteLine($"{DateTime.Now} | ERROR! Program exception! ex.Message: {ex.Message}");
    }
    finally
    {
        Thread.Sleep(1000 * 60);
    }
}