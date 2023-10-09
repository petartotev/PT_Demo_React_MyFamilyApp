using Microsoft.Data.SqlClient;
using System.Data;
using System.Globalization;

namespace BoredApiConsoleApp
{
    public class SqlManager
    {
        private readonly string _connectionString = "Server=localhost;Database=BoredDb;Integrated Security=True;TrustServerCertificate=True;";

        public void InsertActivity(ActivityProposal proposal)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                try
                {
                    var command = new SqlCommand(
                    $"IF NOT EXISTS (SELECT * FROM dbo.Activities WHERE Activity = @activity) BEGIN INSERT INTO dbo.Activities(Activity,Accessibility,[Type],Participants,Price,[Key],Link,CreatedAt) VALUES(@activity,@accessibility,@type,@participants,@price,@key,@link,@createdat) END", connection);

                    command.Parameters.Add("@activity", SqlDbType.NVarChar).Value = !string.IsNullOrWhiteSpace(proposal.Activity) ? proposal.Activity : "";
                    command.Parameters.Add("@accessibility", SqlDbType.Float).Value = proposal.Accessibility;
                    command.Parameters.Add("@type", SqlDbType.NVarChar).Value = !string.IsNullOrWhiteSpace(proposal.Type) ? proposal.Type : "";
                    command.Parameters.Add("@participants", SqlDbType.Int).Value = proposal.Participants;
                    command.Parameters.Add("@price", SqlDbType.Decimal).Value = Convert.ToDecimal(proposal.Price, CultureInfo.CurrentCulture);
                    command.Parameters.Add("@key", SqlDbType.NVarChar).Value = !string.IsNullOrWhiteSpace(proposal.Key) ? proposal.Key : "";
                    command.Parameters.Add("@link", SqlDbType.NVarChar).Value = !string.IsNullOrWhiteSpace(proposal.Link) ? proposal.Link : "";
                    command.Parameters.Add("@createdat", SqlDbType.DateTime2).Value = DateTime.UtcNow;
                    var result = command.ExecuteNonQuery();

                    Console.WriteLine(result > 0 ? $"{DateTime.Now} | Activity inserted into BoredDb!" : $"{DateTime.Now} | Activity NOT inserted into BoredDb!");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"{DateTime.Now} | ERROR! Database exception! ex.Message: {ex.Message}");
                }

                connection.Close();
            };
        }
    }
}
