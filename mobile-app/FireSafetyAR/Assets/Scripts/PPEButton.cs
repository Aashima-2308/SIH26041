using UnityEngine;
using TMPro;

public class PPEButton : MonoBehaviour
{
    public TextMeshProUGUI instructionText;
    public bool isCorrect;

    public void SelectPPE()
    {
        if (isCorrect)
        {
            instructionText.text = "Correct! Appropriate PPE selected.";
        }
        else
        {
            instructionText.text = "Incorrect! Try again and choose appropriate PPE.";
        }
    }
}
