using UnityEngine;

public class HazardVisualInteraction : MonoBehaviour
{
    public HazardButton hazardController;

    private void OnMouseDown()
    {
        hazardController.IdentifyHazard();
    }
}
