using UnityEngine;
using TMPro;

public class HazardButton : MonoBehaviour
{
    public TextMeshProUGUI instructionText;

    public GameObject glovesButton;
    public GameObject sunglassesButton;
    public GameObject sandalsButton;

    public void IdentifyHazard()
    {
        instructionText.text =
            "Correct! Fire hazard identified.\nSelect the appropriate PPE.";

        glovesButton.SetActive(true);
        sunglassesButton.SetActive(true);
        sandalsButton.SetActive(true);
    }
}